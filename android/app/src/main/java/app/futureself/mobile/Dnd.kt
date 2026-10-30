package app.futureself.mobile

import android.app.NotificationManager
import android.content.Context
import android.os.Build

/** During a Focus or Strict session the phone's own Do Not Disturb hides every notification (no banner, no status-bar icon, not even in the panel).
 *  Calls and alarms still come through (calls from numbers outside the emergency list are turned away by CallGuard).
 *  The student's old Do Not Disturb settings are put back when the session ends. Needs "Do Not Disturb access" (turned on once). */
object Dnd {
    fun granted(c: Context): Boolean = try {
        (c.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager).isNotificationPolicyAccessGranted
    } catch (e: Exception) { false }

    fun on(c: Context) {
        try {
            val nm = c.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            if (!nm.isNotificationPolicyAccessGranted) return
            val p = Store.prefs(c)
            if (!p.getBoolean("dnd_on", false)) {
                val old = nm.notificationPolicy
                p.edit().putBoolean("dnd_on", true).putInt("dnd_filter", nm.currentInterruptionFilter)
                    .putInt("dnd_cat", old.priorityCategories).putInt("dnd_calls", old.priorityCallSenders)
                    .putInt("dnd_msgs", old.priorityMessageSenders).putInt("dnd_vis", old.suppressedVisualEffects).apply()
            }
            val vis = if (Build.VERSION.SDK_INT >= 28)
                NotificationManager.Policy.SUPPRESSED_EFFECT_FULL_SCREEN_INTENT or NotificationManager.Policy.SUPPRESSED_EFFECT_LIGHTS or
                    NotificationManager.Policy.SUPPRESSED_EFFECT_PEEK or NotificationManager.Policy.SUPPRESSED_EFFECT_STATUS_BAR or
                    NotificationManager.Policy.SUPPRESSED_EFFECT_BADGE or NotificationManager.Policy.SUPPRESSED_EFFECT_AMBIENT or
                    NotificationManager.Policy.SUPPRESSED_EFFECT_NOTIFICATION_LIST
            else NotificationManager.Policy.SUPPRESSED_EFFECT_SCREEN_ON
            nm.notificationPolicy = NotificationManager.Policy(
                NotificationManager.Policy.PRIORITY_CATEGORY_CALLS or NotificationManager.Policy.PRIORITY_CATEGORY_ALARMS,
                NotificationManager.Policy.PRIORITY_SENDERS_ANY, NotificationManager.Policy.PRIORITY_SENDERS_ANY, vis)
            nm.setInterruptionFilter(NotificationManager.INTERRUPTION_FILTER_PRIORITY)
        } catch (e: Exception) { /* the NotifGuard layer still hides notifications */ }
    }

    fun off(c: Context) {
        try {
            val p = Store.prefs(c)
            if (!p.getBoolean("dnd_on", false)) return
            val nm = c.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            if (nm.isNotificationPolicyAccessGranted) {
                nm.notificationPolicy = NotificationManager.Policy(p.getInt("dnd_cat", 0), p.getInt("dnd_calls", 0), p.getInt("dnd_msgs", 0), p.getInt("dnd_vis", 0))
                nm.setInterruptionFilter(p.getInt("dnd_filter", NotificationManager.INTERRUPTION_FILTER_ALL))
            }
            p.edit().putBoolean("dnd_on", false).apply()
        } catch (e: Exception) { /* ignore */ }
    }

    /** safety net: if the phone was restarted or the lock ended while the app was closed, give the student's settings back */
    fun heal(c: Context) { if (Store.prefs(c).getBoolean("dnd_on", false) && !Lock.isActive(c)) off(c) }
}
