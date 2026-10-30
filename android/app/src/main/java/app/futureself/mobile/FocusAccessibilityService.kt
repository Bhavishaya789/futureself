package app.futureself.mobile

import android.accessibilityservice.AccessibilityService
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.os.SystemClock
import android.provider.Settings
import android.telecom.TelecomManager
import android.view.accessibility.AccessibilityEvent
import android.view.inputmethod.InputMethodManager

/**
 * Watches which app comes to the front. While a study lock is on, every app except FutureSelf,
 * the phone (calls), the keyboard and the system bars is covered by the lock screen (BlockerActivity).
 *
 * Focus lock:  other apps are covered.
 * Strict lock: the same, and in addition the notification shade, quick settings and the power menu are pushed shut,
 *              so there is nothing to tap on except FutureSelf and calls. Strict also cannot be ended early on the phone.
 *
 * If Android refuses to open the lock screen over another app (some makers hide that switch), the phone is sent to the
 * home screen instead, so the other app is still not usable.
 */
class FocusAccessibilityService : AccessibilityService() {

    companion object {
        @Volatile var instance: FocusAccessibilityService? = null
        @Volatile private var lastLaunch = 0L
        @Volatile private var lastShadeClose = 0L
        private val main = Handler(Looper.getMainLooper())

        private val ALWAYS = setOf(
            "com.android.systemui", "android", "com.android.phone", "com.android.server.telecom",
            "com.android.emergency",
            "com.google.android.permissioncontroller", "com.android.permissioncontroller"
        )
        /** parts of the system UI that Strict mode closes (the pull-down panel, quick tiles, the power menu) */
        private val SHADE = Regex("shade|statusbar|quicksettings|notificationpanel|qspanel|controlcenter|globalactions|powermenu|shutdown|poweroff", RegexOption.IGNORE_CASE)
        /** system UI that must keep working: volume, keyboard pickers, toasts, call screens, lock screen */
        private val SYSTEM_OK = Regex("volume|toast|keyguard|bouncer|biometric|inputmethod|incall|dialer", RegexOption.IGNORE_CASE)

        fun isEnabled(ctx: Context): Boolean {
            val me = ComponentName(ctx, FocusAccessibilityService::class.java)
            val s = Settings.Secure.getString(ctx.contentResolver, Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES) ?: return false
            return s.split(':').any { ComponentName.unflattenFromString(it) == me }
        }

        /** look at the app on screen right now (used the moment a lock starts, and every second while a lock runs) */
        fun enforce() {
            val svc = instance ?: return
            try {
                val root = svc.rootInActiveWindow
                svc.check(root?.packageName?.toString(), root?.className?.toString())
            } catch (e: Exception) { /* ignore */ }
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
        if (event == null) return
        if (event.eventType != AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED && event.eventType != AccessibilityEvent.TYPE_WINDOWS_CHANGED) return
        check(event.packageName?.toString(), event.className?.toString())
    }

    private fun allowed(pkg: String): Boolean {
        if (pkg == packageName || pkg in ALWAYS) return true
        // phone apps (Phone, Truecaller...) only while a call is happening: the plain dial pad is blocked like any other app
        var phoneApp = pkg.contains("incallui") || pkg.contains("dialer") || pkg.contains("telecom") || pkg == "com.truecaller"
        try { if ((getSystemService(Context.TELECOM_SERVICE) as TelecomManager).defaultDialerPackage == pkg) phoneApp = true } catch (e: Exception) { /* ignore */ }
        if (phoneApp) return Calls.callScreenOk(this)
        try {
            val imm = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
            if (imm.enabledInputMethodList.any { it.packageName == pkg }) return true
        } catch (e: Exception) { /* ignore */ }
        return false
    }

    private fun check(pkg: String?, cls: String?) {
        if (pkg == null || !Lock.isActive(this)) return
        val strict = Lock.get(this).mode == "strict"

        // Strict: push the notification shade, quick settings and power menu shut
        if (strict && (pkg == "com.android.systemui" || pkg == "android")) {
            val c = cls ?: ""
            if (SHADE.containsMatchIn(c) && !SYSTEM_OK.containsMatchIn(c)) closeShade()
            return
        }
        if (allowed(pkg)) return

        val now = SystemClock.elapsedRealtime()
        if (now - lastLaunch < 600) return
        lastLaunch = now
        MainActivity.emit("{\"type\":\"distraction\",\"name\":" + org.json.JSONObject.quote(label(pkg)) + "}")
        try {
            startActivity(Intent(this, BlockerActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_REORDER_TO_FRONT or Intent.FLAG_ACTIVITY_NO_ANIMATION))
        } catch (e: Exception) { /* refused: handled by the fallback below */ }
        // Some phones accept the call above but silently never show the screen. If it is not there shortly, go Home.
        main.postDelayed({
            if (Lock.isActive(this) && !BlockerActivity.visible) {
                try { performGlobalAction(GLOBAL_ACTION_HOME) } catch (e: Exception) { /* ignore */ }
            }
        }, 700)
    }

    private fun closeShade() {
        val now = SystemClock.elapsedRealtime()
        if (now - lastShadeClose < 400) return
        lastShadeClose = now
        try {
            if (Build.VERSION.SDK_INT >= 31) performGlobalAction(GLOBAL_ACTION_DISMISS_NOTIFICATION_SHADE)
            else performGlobalAction(GLOBAL_ACTION_BACK)
            // the power menu is not a shade: Back closes it
            main.postDelayed({ if (Lock.isActive(this)) try { performGlobalAction(GLOBAL_ACTION_BACK) } catch (e: Exception) { /* ignore */ } }, 250)
        } catch (e: Exception) { /* ignore */ }
    }

    private fun label(pkg: String): String = try {
        packageManager.getApplicationLabel(packageManager.getApplicationInfo(pkg, 0)).toString()
    } catch (e: Exception) { pkg }
}
