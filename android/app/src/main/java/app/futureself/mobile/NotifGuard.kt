package app.futureself.mobile

import android.app.Notification
import android.content.ComponentName
import android.content.Context
import android.os.Build
import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import androidx.core.app.NotificationManagerCompat

/** Focus and Strict: other apps' notifications are hidden for the whole session and come back when it ends.
 *  Calls, alarms and FutureSelf's own notices are left alone. Needs "Notification access" (the student turns it on once). */
class NotifGuard : NotificationListenerService() {
    override fun onListenerConnected() { instance = this; sweep(this) }
    override fun onListenerDisconnected() { if (instance === this) instance = null }
    override fun onNotificationPosted(sbn: StatusBarNotification) { hide(this, this, sbn) }

    companion object {
        @Volatile var instance: NotifGuard? = null

        fun enabled(c: Context): Boolean = try {
            NotificationManagerCompat.getEnabledListenerPackages(c).contains(c.packageName)
        } catch (e: Exception) { false }

        private fun keep(c: Context, sbn: StatusBarNotification): Boolean {
            val p = sbn.packageName ?: return true
            if (p == c.packageName || p == "android" || p == "com.android.systemui" || p == "com.android.phone" || p == "com.android.server.telecom") return true
            if (p.contains("incallui") || p.contains("dialer") || p.contains("telecom")) return true
            val cat = sbn.notification?.category
            return cat == Notification.CATEGORY_CALL || cat == Notification.CATEGORY_ALARM || cat == Notification.CATEGORY_NAVIGATION
        }

        private fun hide(c: Context, svc: NotificationListenerService, sbn: StatusBarNotification) {
            try {
                val st = Lock.get(c)
                if (!Lock.isActive(c) || keep(c, sbn)) return
                if (!sbn.isClearable && Build.VERSION.SDK_INT < 26) return
                if (Build.VERSION.SDK_INT >= 26) {
                    // hidden now, shown again when the session is over
                    val ms = (st.endsAt - System.currentTimeMillis()).coerceIn(2000L, 12L * 3600 * 1000) + 1000L
                    svc.snoozeNotification(sbn.key, ms)
                } else svc.cancelNotification(sbn.key)
            } catch (e: Exception) { /* leave it */ }
        }

        /** hides everything already showing (called when a strict session starts and every second while it runs) */
        fun sweep(c: Context) {
            val svc = instance ?: return
            try { svc.activeNotifications?.forEach { hide(c, svc, it) } } catch (e: Exception) { /* ignore */ }
        }
    }
}
