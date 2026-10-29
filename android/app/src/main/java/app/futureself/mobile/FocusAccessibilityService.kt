package app.futureself.mobile

import android.accessibilityservice.AccessibilityService
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.os.SystemClock
import android.provider.Settings
import android.telecom.TelecomManager
import android.view.accessibility.AccessibilityEvent
import android.view.inputmethod.InputMethodManager

/**
 * Watches which app comes to the front. While a study lock is on, every app except FutureSelf,
 * the phone (calls), the keyboard and the system bars is covered by the lock screen (BlockerActivity).
 */
class FocusAccessibilityService : AccessibilityService() {

    companion object {
        @Volatile var instance: FocusAccessibilityService? = null
        @Volatile private var lastLaunch = 0L

        private val ALWAYS = setOf(
            "com.android.systemui", "android", "com.android.phone", "com.android.server.telecom",
            "com.android.dialer", "com.google.android.dialer", "com.samsung.android.dialer",
            "com.samsung.android.incallui", "com.android.incallui", "com.android.emergency",
            "com.google.android.permissioncontroller", "com.android.permissioncontroller"
        )

        fun isEnabled(ctx: Context): Boolean {
            val me = ComponentName(ctx, FocusAccessibilityService::class.java)
            val s = Settings.Secure.getString(ctx.contentResolver, Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES) ?: return false
            return s.split(':').any { ComponentName.unflattenFromString(it) == me }
        }

        /** look at the app on screen right now (used the moment a lock starts) */
        fun enforce() {
            val svc = instance ?: return
            try { svc.check(svc.rootInActiveWindow?.packageName?.toString()) } catch (e: Exception) { /* ignore */ }
        }
    }

    override fun onServiceConnected() {
        instance = this
        Poller.ensure(applicationContext)
    }

    override fun onUnbind(intent: Intent?): Boolean {
        if (instance === this) instance = null
        return super.onUnbind(intent)
    }

    override fun onInterrupt() {}

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        if (event == null || event.eventType != AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED) return
        check(event.packageName?.toString())
    }

    private fun allowed(pkg: String): Boolean {
        if (pkg == packageName || pkg in ALWAYS) return true
        if (pkg.contains("incallui") || pkg.contains("dialer") || pkg.contains("telecom")) return true
        try {
            val tm = getSystemService(Context.TELECOM_SERVICE) as TelecomManager
            if (tm.defaultDialerPackage == pkg) return true
        } catch (e: Exception) { /* ignore */ }
        try {
            val imm = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
            if (imm.enabledInputMethodList.any { it.packageName == pkg }) return true
        } catch (e: Exception) { /* ignore */ }
        return false
    }

    private fun check(pkg: String?) {
        if (pkg == null || !Lock.isActive(this) || allowed(pkg)) return
        val now = SystemClock.elapsedRealtime()
        if (now - lastLaunch < 600) return
        lastLaunch = now
        MainActivity.emit("{\"type\":\"distraction\",\"name\":" + org.json.JSONObject.quote(label(pkg)) + "}")
        try {
            startActivity(Intent(this, BlockerActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_REORDER_TO_FRONT or Intent.FLAG_ACTIVITY_NO_ANIMATION))
        } catch (e: Exception) { /* background start refused: needs the "display over other apps" permission */ }
    }

    private fun label(pkg: String): String = try {
        packageManager.getApplicationLabel(packageManager.getApplicationInfo(pkg, 0)).toString()
    } catch (e: Exception) { pkg }
}
