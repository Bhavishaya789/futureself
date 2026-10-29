package app.futureself.mobile

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject
import java.net.Inet4Address
import java.net.HttpURLConnection
import java.net.NetworkInterface
import java.net.URL
import java.util.concurrent.Callable
import java.util.concurrent.Executors

/** Talks to the FutureSelf PC app over the home / college Wi-Fi (plain HTTP, port 47820). Call only from a background thread. */
object Link {
    @Volatile var connected = false
    private val HOSTRE = Regex("^[A-Za-z0-9.\\-]{1,100}$")

    fun paired(c: Context): Boolean =
        Store.getString(c, "link_token").isNotEmpty() && Store.getString(c, "link_addr").isNotEmpty()

    fun info(c: Context): JSONObject = JSONObject()
        .put("paired", paired(c))
        .put("pcName", Store.getString(c, "link_name"))
        .put("address", Store.getString(c, "link_addr") + ":" + Store.getString(c, "link_port", "47820"))
        .put("connected", connected && paired(c))
        .put("restrictOnPc", Store.getBool(c, "restrictOnPc", true))
        .put("account", Account.signedIn(c))
        .put("accountSite", Account.site(c))

    fun unpair(c: Context) {
        Store.prefs(c).edit().remove("link_token").remove("link_addr").remove("link_port").remove("link_name").remove("link_pcid").apply()
        connected = false
        val s = Lock.get(c)
        if (s.active && s.source == "pc") Lock.stop(c)
    }

    internal fun http(method: String, url: String, token: String?, body: String?, timeoutMs: Int): Pair<Int, String>? {
        var conn: HttpURLConnection? = null
        return try {
            conn = URL(url).openConnection() as HttpURLConnection
            conn.requestMethod = method
            conn.connectTimeout = timeoutMs
            conn.readTimeout = timeoutMs
            conn.useCaches = false
            if (token != null) conn.setRequestProperty("Authorization", "Bearer $token")
            if (body != null) {
                conn.doOutput = true
                conn.setRequestProperty("Content-Type", "application/json")
                conn.outputStream.use { it.write(body.toByteArray(Charsets.UTF_8)) }
            }
            val code = conn.responseCode
            val stream = if (code < 400) conn.inputStream else conn.errorStream
            val text = stream?.bufferedReader(Charsets.UTF_8)?.use { it.readText() } ?: ""
            Pair(code, text)
        } catch (e: Exception) {
            null
        } finally {
            conn?.disconnect()
        }
    }

    /** the PC's current session state, or null when the PC cannot be reached */
    fun state(c: Context): JSONObject? {
        val addr = Store.getString(c, "link_addr"); val port = Store.getString(c, "link_port", "47820"); val tok = Store.getString(c, "link_token")
        if (addr.isEmpty() || tok.isEmpty()) { connected = false; return null }
        val r = http("GET", "http://$addr:$port/fs/state", tok, null, 2500)
        if (r == null) { connected = false; return null }
        if (r.first == 401) { // the PC forgot this phone
            Store.prefs(c).edit().remove("link_token").apply()
            connected = false
            return null
        }
        if (r.first != 200) { connected = false; return null }
        return try { connected = true; JSONObject(r.second) } catch (e: Exception) { connected = false; null }
    }

    private fun ping(addr: String, port: Int): JSONObject? {
        val r = http("GET", "http://$addr:$port/fs/ping", null, null, 600) ?: return null
        if (r.first != 200) return null
        return try {
            val j = JSONObject(r.second)
            if (j.optString("app") == "FutureSelf") j.put("address", addr).put("port", port) else null
        } catch (e: Exception) { null }
    }

    private fun myPrefix(): Pair<String, String>? { // ("192.168.1", "192.168.1.23")
        try {
            val all = NetworkInterface.getNetworkInterfaces() ?: return null
            for (ni in all) {
                if (!ni.isUp || ni.isLoopback) continue
                for (ia in ni.interfaceAddresses) {
                    val a = ia.address
                    if (a is Inet4Address && a.isSiteLocalAddress) {
                        val ip = a.hostAddress ?: continue
                        return Pair(ip.substringBeforeLast('.'), ip)
                    }
                }
            }
        } catch (e: Exception) { /* ignore */ }
        return null
    }

    /** looks for PCs running FutureSelf on the same Wi-Fi (the /24 around this phone) */
    fun scan(): JSONArray {
        val found = JSONArray()
        val me = myPrefix() ?: return found
        val pool = Executors.newFixedThreadPool(48)
        try {
            for (ports in listOf(listOf(47820), (47821..47829).toList())) {
                val jobs = ArrayList<Callable<JSONObject?>>()
                for (host in 1..254) {
                    val ip = me.first + "." + host
                    if (ip == me.second) continue
                    for (p in ports) jobs.add(Callable { ping(ip, p) })
                }
                for (f in pool.invokeAll(jobs)) {
                    try { f.get()?.let { found.put(it) } } catch (e: Exception) { /* ignore */ }
                }
                if (found.length() > 0) break
            }
        } finally {
            pool.shutdownNow()
        }
        return found
    }

    /** the PC got a new address on the network: find it again by its id */
    fun rediscover(c: Context) {
        val want = Store.getString(c, "link_pcid")
        if (want.isEmpty()) return
        val list = scan()
        for (i in 0 until list.length()) {
            val o = list.optJSONObject(i) ?: continue
            if (o.optString("pcId") == want) {
                Store.prefs(c).edit().putString("link_addr", o.optString("address")).putString("link_port", o.optInt("port").toString()).apply()
                return
            }
        }
    }

    fun pair(c: Context, addr: String, port: Int, code: String, deviceName: String): JSONObject {
        if (!HOSTRE.matches(addr)) return errJson("That PC address does not look right")
        if (port !in 1..65535) return errJson("That port does not look right")
        if (!Regex("^[0-9]{6}$").matches(code)) return errJson("The code has 6 digits")
        val body = JSONObject().put("code", code).put("name", deviceName.take(40)).toString()
        val r = http("POST", "http://$addr:$port/fs/pair", null, body, 5000)
            ?: return errJson("Could not reach the PC. Is it on the same Wi-Fi and is the FutureSelf PC app open?")
        val j = try { JSONObject(r.second) } catch (e: Exception) { JSONObject() }
        if (r.first != 200) return errJson(j.optString("error", "The PC refused the code"))
        val token = j.optString("token")
        if (!Regex("^[a-f0-9]{48}$").matches(token)) return errJson("The PC sent an unexpected answer")
        Store.prefs(c).edit()
            .putString("link_addr", addr).putString("link_port", port.toString()).putString("link_token", token)
            .putString("link_name", j.optString("name", "PC")).putString("link_pcid", j.optString("pcId"))
            .apply()
        return okJson().put("name", j.optString("name", "PC"))
    }
}
