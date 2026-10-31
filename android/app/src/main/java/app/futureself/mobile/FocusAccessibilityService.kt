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
import android.view.accessibility.AccessibilityNodeInfo
import android.widget.Toast
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

        /** short-video screens: the app's own screen-element names that only exist while the vertical video feed is open */
        private val SHORTS = mapOf(
            "com.google.android.youtube" to Regex("reel_player|reel_watch|reel_recycler|reel_multi|shorts_player|shorts_container", RegexOption.IGNORE_CASE),
            "com.instagram.android" to Regex("clips_viewer|clips_video|clips_swipe|reel_viewer|reels_viewer", RegexOption.IGNORE_CASE),
            "com.snapchat.android" to Regex("spotlight", RegexOption.IGNORE_CASE),
            "com.facebook.katana" to Regex("reels_viewer|reel_viewer|reels_player", RegexOption.IGNORE_CASE)
        )
        @Volatile private var lastShortsScan = 0L
        @Volatile private var lastShortsHit = 0L

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
            try { svc.scan() } catch (e: Exception) { /* ignore */ }
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
        if (event.eventType == AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED || event.eventType == AccessibilityEvent.TYPE_VIEW_SCROLLED) { shortsGuard(event); return }
        if (event.eventType != AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED && event.eventType != AccessibilityEvent.TYPE_WINDOWS_CHANGED) return
        // window-list events carry no package name, so look at the windows themselves (this is what catches the pulled-down notification panel)
        if (event.eventType == AccessibilityEvent.TYPE_WINDOWS_CHANGED) scan() else check(event.packageName?.toString(), event.className?.toString())
    }

    /** Optional (Phone settings): while Shorts / Reels / Spotlight are open the app is sent one step back, so lectures on YouTube still work. */
    private fun shortsGuard(event: AccessibilityEvent) {
        try {
            if (!Store.getBool(this, "blockShorts", false)) return
            val pkg = event.packageName?.toString() ?: return
            val re = SHORTS[pkg] ?: return
            val now = SystemClock.uptimeMillis()
            if (now - lastShortsScan < 500 || now - lastShortsHit < 1200) return
            lastShortsScan = now
            val root = rootInActiveWindow ?: return
            if (root.packageName?.toString() != pkg) return
            if (findId(root, re, 0, IntArray(1))) {
                lastShortsHit = now
                performGlobalAction(GLOBAL_ACTION_BACK)
                main.post { try { Toast.makeText(applicationContext, "Shorts and Reels are blocked by FutureSelf", Toast.LENGTH_SHORT).show() } catch (e: Exception) { /* ignore */ } }
            }
        } catch (e: Exception) { /* never let this break the lock */ }
    }

    private fun findId(n: AccessibilityNodeInfo?, re: Regex, depth: Int, seen: IntArray): Boolean {
        if (n == null || depth > 16 || seen[0] > 700) return false
        seen[0]++
        val id = n.viewIdResourceName
        if (id != null && re.containsMatchIn(id) && n.isVisibleToUser) return true
        for (i in 0 until n.childCount) { if (findId(n.getChild(i), re, depth + 1, seen)) return true }
        return false
    }

    /** looks at the window the student is really using right now (the one with focus), whatever its type */
    private fun scan() {
        if (!Lock.isActive(this)) return
        var pkg: String? = null; var cls: String? = null
        try {
            val ws = windows
            val w = ws?.firstOrNull { it.isActive } ?: ws?.firstOrNull { it.isFocused }
            val r = w?.root ?: rootInActiveWindow
            pkg = r?.packageName?.toString(); cls = r?.className?.toString()
        } catch (e: Exception) { /* fall back below */ }
        if (pkg == null) { try { val r = rootInActiveWindow; pkg = r?.packageName?.toString(); cls = r?.className?.toString() } catch (e: Exception) { /* none */ } }
        check(pkg, cls)
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

        // Focus and Strict: the pulled-down panel (notifications, quick tiles) and the power menu are closed at once
        if (pkg.contains("systemui") || pkg == "android") {
            val c = cls ?: ""
            if (SYSTEM_OK.containsMatchIn(c)) return
            if (pkg == "android") { if (SHADE.containsMatchIn(c)) closeShade(); return }
            try { if ((getSystemService(Context.KEYGUARD_SERVICE) as android.app.KeyguardManager).isKeyguardLocked) return } catch (e: Exception) { /* ignore */ }
            if (Calls.callScreenOk(this)) return   // a call is ringing or running: its controls live in the panel
            closeShade()
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
        if (now - lastShadeClose < 350) return
        lastShadeClose = now
        try {
            if (Build.VERSION.SDK_INT >= 31) performGlobalAction(GLOBAL_ACTION_DISMISS_NOTIFICATION_SHADE)
            else performGlobalAction(GLOBAL_ACTION_BACK)
        } catch (e: Exception) { /* ignore */ }
        // Some phones (MIUI, ColorOS...) ignore that. If the panel is still there, Back, then the lock screen on top of it.
        main.postDelayed({
            if (!Lock.isActive(this)) return@postDelayed
            try { performGlobalAction(GLOBAL_ACTION_BACK) } catch (e: Exception) { /* ignore */ }
        }, 200)
        main.postDelayed({
            if (!Lock.isActive(this)) return@postDelayed
            val still = try { rootInActiveWindow?.packageName?.toString()?.contains("systemui") == true } catch (e: Exception) { false }
            if (still) {
                try { startActivity(Intent(this, BlockerActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_REORDER_TO_FRONT or Intent.FLAG_ACTIVITY_NO_ANIMATION)) } catch (e: Exception) { /* ignore */ }
                try { performGlobalAction(GLOBAL_ACTION_HOME) } catch (e: Exception) { /* ignore */ }
            }
        }, 550)
    }

    private fun label(pkg: String): String = try {
        packageManager.getApplicationLabel(packageManager.getApplicationInfo(pkg, 0)).toString()
    } catch (e: Exception) { pkg }
}
