package app.futureself.mobile

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.PowerManager
import android.provider.Settings
import android.webkit.JavascriptInterface
import android.webkit.WebView
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationManagerCompat
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL

/**
 * Everything the app pages ask the phone to do. Every method returns a JSON string.
 * The slow ones (network) take a callback id as the first argument and answer later through window.__fsCb.
 */
class AndroidBridge(private val act: Activity, private val web: WebView) {

    private fun reply(id: Int, json: JSONObject) {
        act.runOnUiThread { web.evaluateJavascript("window.__fsCb&&window.__fsCb($id," + JSONObject.quote(json.toString()) + ")", null) }
    }

    private fun later(id: Int, work: () -> JSONObject) {
        Thread {
            val r = try { work() } catch (e: Throwable) { errJson(e.message ?: "Something went wrong") }
            reply(id, r)
        }.start()
    }

    @JavascriptInterface
    fun version(): String = JSONObject().put("version", try { act.packageManager.getPackageInfo(act.packageName, 0).versionName } catch (e: Exception) { "1.0.0" }).toString()

    @JavascriptInterface
    fun status(): String {
        val nm = NotificationManagerCompat.from(act)
        val notif = if (Build.VERSION.SDK_INT >= 33)
            act.checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED && nm.areNotificationsEnabled()
        else nm.areNotificationsEnabled()
        val pm = act.getSystemService(Context.POWER_SERVICE) as PowerManager
        return JSONObject()
            .put("accessibility", FocusAccessibilityService.isEnabled(act))
            .put("overlay", Settings.canDrawOverlays(act))
            .put("callGuard", callGuardOn())
            .put("call", act.checkSelfPermission(Manifest.permission.CALL_PHONE) == PackageManager.PERMISSION_GRANTED)
            .put("notifications", notif)
            .put("exactAlarm", true) // reminders use clock alarms, which need no permission
            .put("battery", pm.isIgnoringBatteryOptimizations(act.packageName))
            .put("lockActive", Lock.isActive(act))
            .put("manufacturer", Build.MANUFACTURER.lowercase())
            .put("sdk", Build.VERSION.SDK_INT)
            .toString()
    }

    @JavascriptInterface
    fun openSettings(kind: String): String {
        val pkg = Uri.parse("package:" + act.packageName)
        val i: Intent = when (kind) {
            "accessibility" -> Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS)
            "overlay" -> Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, pkg)
            "battery" -> Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, pkg)
            "alarms" -> if (Build.VERSION.SDK_INT >= 31) Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM, pkg) else Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, pkg)
            "notifications" -> Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS).putExtra(Settings.EXTRA_APP_PACKAGE, act.packageName)
            "autostart", "popup" -> return oem(kind)
            else -> Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, pkg)
        }
        // Settings are closed during a lock so the student cannot switch the lock off from inside it
        if (Lock.isActive(act)) return errJson("Settings are closed while the phone is locked").toString()
        act.runOnUiThread {
            try { act.startActivity(i) } catch (e: Exception) {
                try { act.startActivity(Intent(Settings.ACTION_SETTINGS)) } catch (x: Exception) { /* nothing to open */ }
            }
        }
        return okJson().toString()
    }

    /** Phone makers (Xiaomi, Oppo, Vivo, Huawei, Samsung) hide extra switches that decide whether a lock screen may appear while another app is open. Best effort: try the maker's own screen, fall back to the app's info page. */
    private fun oem(kind: String): String {
        if (Lock.isActive(act)) return errJson("Settings are closed while the phone is locked").toString()
        val pk = act.packageName
        val tries = ArrayList<Intent>()
        fun comp(p: String, c: String) = Intent().setClassName(p, c)
        if (kind == "popup") {
            tries.add(Intent("miui.intent.action.APP_PERM_EDITOR").setClassName("com.miui.securitycenter", "com.miui.permcenter.permissions.PermissionsEditorActivity").putExtra("extra_pkgname", pk))
            tries.add(Intent("miui.intent.action.APP_PERM_EDITOR").setClassName("com.miui.securitycenter", "com.miui.permcenter.permissions.AppPermissionsEditorActivity").putExtra("extra_pkgname", pk))
            tries.add(Intent("miui.intent.action.APP_PERM_EDITOR").putExtra("extra_pkgname", pk))
        } else {
            tries.add(comp("com.miui.securitycenter", "com.miui.permcenter.autostart.AutoStartManagementActivity"))
            tries.add(comp("com.coloros.safecenter", "com.coloros.safecenter.permission.startup.StartupAppListActivity"))
            tries.add(comp("com.oppo.safe", "com.oppo.safe.permission.startup.StartupAppListActivity"))
            tries.add(comp("com.vivo.permissionmanager", "com.vivo.permissionmanager.activity.BgStartUpManagerActivity"))
            tries.add(comp("com.huawei.systemmanager", "com.huawei.systemmanager.startupmgr.ui.StartupNormalAppListActivity"))
            tries.add(Intent(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS))
        }
        tries.add(Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:$pk")))
        act.runOnUiThread {
            for (t in tries) {
                try { act.startActivity(t); return@runOnUiThread } catch (e: Exception) { /* try the next one */ }
            }
        }
        return okJson().toString()
    }

    private fun callGuardOn(): Boolean = try {
        Build.VERSION.SDK_INT >= 29 && (act.getSystemService(android.app.role.RoleManager::class.java)).isRoleHeld(android.app.role.RoleManager.ROLE_CALL_SCREENING)
    } catch (e: Exception) { false }

    /** asks Android to make FutureSelf the call-screening app, so calls from numbers outside the emergency list are turned away during a lock */
    @JavascriptInterface
    fun requestCallGuard(): String {
        if (Build.VERSION.SDK_INT < 29) return errJson("This needs Android 10 or newer").toString()
        val rm = act.getSystemService(android.app.role.RoleManager::class.java)
        if (rm.isRoleHeld(android.app.role.RoleManager.ROLE_CALL_SCREENING)) return okJson().toString()
        act.runOnUiThread {
            try { act.startActivityForResult(rm.createRequestRoleIntent(android.app.role.RoleManager.ROLE_CALL_SCREENING), 21) }
            catch (e: Exception) { try { act.startActivity(Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:" + act.packageName))) } catch (x: Exception) { /* nothing */ } }
        }
        return okJson().toString()
    }

    @JavascriptInterface
    fun requestPermission(kind: String): String {
        val perm = when (kind) {
            "call" -> Manifest.permission.CALL_PHONE
            "notifications" -> if (Build.VERSION.SDK_INT >= 33) Manifest.permission.POST_NOTIFICATIONS else null
            else -> null
        } ?: return okJson().toString()
        act.runOnUiThread { ActivityCompat.requestPermissions(act, arrayOf(perm), 11) }
        return okJson().toString()
    }

    @JavascriptInterface
    fun getContacts(): String = Contacts.load(act).toString()

    @JavascriptInterface
    fun saveContacts(json: String): String {
        val e = Contacts.save(act, json)
        return (if (e == null) okJson() else errJson(e)).toString()
    }

    @JavascriptInterface
    fun callNumber(n: String): String {
        if (Contacts.normalize(n) == null) return errJson("That is not a phone number").toString()
        act.runOnUiThread { Dial.press(act, n) }
        return okJson().toString()
    }

    @JavascriptInterface
    fun setSetting(k: String, v: String): String {
        if (k != "autoLockBlocks" && k != "restrictOnPc" && !k.startsWith("oem_")) return errJson("Unknown setting").toString()
        Store.putString(act, k, if (v == "true") "true" else "false")
        if (k == "restrictOnPc" && v == "true" && Link.paired(act)) Poller.begin(act)
        return okJson().toString()
    }

    @JavascriptInterface
    fun getSetting(k: String): String {
        val v = Store.prefs(act).getString(k, null)
        return JSONObject().put("value", v ?: JSONObject.NULL).toString()
    }

    @JavascriptInterface
    fun lockStart(json: String): String {
        val o = try { JSONObject(json) } catch (e: Exception) { return errJson("Bad lock request").toString() }
        val test = o.optBoolean("test", false)
        val mode = o.optString("mode", "focus")
        // gentle mode never locks, the same as on the PC
        if (mode == "gentle" && !test) return okJson().put("locked", false).put("reason", "gentle").toString()
        if (!FocusAccessibilityService.isEnabled(act)) {
            return okJson().put("locked", false).put("reason", "The app lock is not turned on yet. Open Phone & lock and follow the steps.").toString()
        }
        val ends = o.optLong("endsAt", 0L)
        val now = System.currentTimeMillis()
        if (ends <= now || ends - now > 12L * 3600 * 1000) return errJson("Bad lock time").toString()
        Lock.start(act, o.optString("subject", "Study time"), o.optString("topicId"), ends, "phone", if (mode == "strict") "strict" else "focus")
        Poller.begin(act)
        FocusAccessibilityService.enforce()
        return okJson().put("locked", true).toString()
    }

    @JavascriptInterface
    fun lockStop(): String {
        val s = Lock.get(act)
        if (s.active && s.source == "phone") Lock.stop(act)
        return okJson().toString()
    }

    @JavascriptInterface
    fun lockInfo(): String {
        val on = Lock.isActive(act); val s = Lock.get(act)
        return JSONObject().put("active", on).put("subject", s.subject).put("endsAt", s.endsAt).toString()
    }

    @JavascriptInterface
    fun allowVideo(id: String): String = (if (YtGuard.allow(id)) okJson() else errJson("Bad video id")).toString()

    @JavascriptInterface
    fun scheduleReminders(json: String): String {
        Reminders.replaceAll(act, json)
        return okJson().toString()
    }

    /** sign-in details from the page, kept so the lock service can follow the PC in the background */
    @JavascriptInterface
    fun accountSave(json: String): String {
        val o = try { JSONObject(json) } catch (e: Exception) { return errJson("Bad request").toString() }
        val site = o.optString("site").trim().trimEnd('/')
        val token = o.optString("token")
        if (site.isNotEmpty() && !Regex("^https://[A-Za-z0-9.\\-]+(:[0-9]+)?$").matches(site)) return errJson("Bad server address").toString()
        Account.save(act, site, token)
        if (token.isNotEmpty() && Store.getBool(act, "restrictOnPc", true)) Poller.begin(act)
        return okJson().toString()
    }

    /** opens the Google sign-in page of the student's own FutureSelf site in the normal browser */
    @JavascriptInterface
    fun openBrowser(url: String): String {
        val ok = Account.hostOk(act, url) && Uri.parse(url).path == "/login.html"
        if (!ok) return errJson("Not allowed").toString()
        act.runOnUiThread { try { act.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url))) } catch (e: Exception) { /* no browser */ } }
        return okJson().toString()
    }

    /** web requests to the student's own FutureSelf server (the page itself is not allowed to call other sites) */
    @JavascriptInterface
    fun httpJson(id: Int, method: String, url: String, token: String, body: String) {
        later(id) {
            if (method != "GET" && method != "POST") return@later errJson("Not allowed")
            if (!Account.hostOk(act, url)) return@later errJson("Not allowed")
            if (body.length > 20000) return@later errJson("Request too large")
            val r = Link.http(method, url, if (token.isEmpty()) null else token, if (method == "POST") body else null, 75000)
                ?: return@later errJson("Could not reach the server")
            val j = try { JSONObject(r.second) } catch (e: Exception) { JSONObject() }
            okJson().put("status", r.first).put("json", j)
        }
    }

    @JavascriptInterface
    fun linkInfo(): String = Link.info(act).toString()

    @JavascriptInterface
    fun linkUnpair(): String { Link.unpair(act); return okJson().toString() }

    /** downloads a YouTube results page (only that, only https) so the app can pick the topic video */
    @JavascriptInterface
    fun fetchText(id: Int, url: String) {
        later(id) {
            val u = URL(url)
            if (u.protocol != "https" || u.host != "www.youtube.com" || u.path != "/results") return@later errJson("Not allowed")
            val c = u.openConnection() as HttpURLConnection
            try {
                c.connectTimeout = 10000; c.readTimeout = 15000
                c.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")
                c.setRequestProperty("Accept-Language", "en-US,en;q=0.9")
                c.setRequestProperty("Cookie", "CONSENT=YES+1; SOCS=CAI")
                val bytes = c.inputStream.use { it.readBytes() }
                if (bytes.size > 6_000_000) return@later errJson("Answer too large")
                okJson().put("text", String(bytes, Charsets.UTF_8))
            } finally { c.disconnect() }
        }
    }

    @JavascriptInterface
    fun linkScan(id: Int) {
        later(id) { okJson().put("found", Link.scan()) }
    }

    @JavascriptInterface
    fun linkPair(id: Int, address: String, port: Int, code: String, deviceName: String) {
        later(id) {
            val r = Link.pair(act, address, port, code, deviceName)
            if (r.optBoolean("ok")) Poller.begin(act)
            r
        }
    }
}
