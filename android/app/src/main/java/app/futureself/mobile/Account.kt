package app.futureself.mobile

import android.content.Context
import org.json.JSONObject

/** The signed-in FutureSelf account. The page saves the site address and token here, so the background lock can follow the PC even when the app is closed. */
object Account {
    @Volatile var connected = false

    fun site(c: Context): String = Store.getString(c, "acct_site")
    fun signedIn(c: Context): Boolean = Store.getString(c, "acct_token").isNotEmpty() && site(c).startsWith("https://")

    fun save(c: Context, site: String, token: String) {
        Store.prefs(c).edit().putString("acct_site", site).putString("acct_token", token).apply()
        if (token.isEmpty()) {
            connected = false
            val s = Lock.get(c)
            if (s.active && s.source == "pc") Lock.stop(c)
        }
    }

    /** the page may only talk to the server address the student entered */
    fun hostOk(c: Context, url: String): Boolean {
        return try {
            val u = java.net.URL(url); val s = java.net.URL(site(c))
            u.protocol == "https" && u.host.equals(s.host, true) && u.port == s.port
        } catch (e: Exception) { false }
    }

    /** what the PC is doing right now (through the server), or null when the server cannot be reached */
    fun state(c: Context): JSONObject? {
        if (!signedIn(c)) { connected = false; return null }
        val r = Link.http("GET", site(c).trimEnd('/') + "/api/session", Store.getString(c, "acct_token"), null, 6000)
        if (r == null) { connected = false; return null }
        if (r.first == 401) { Store.prefs(c).edit().putString("acct_token", "").apply(); connected = false; return null }
        if (r.first != 200) { connected = false; return null }
        return try { connected = true; JSONObject(r.second) } catch (e: Exception) { connected = false; null }
    }
}
