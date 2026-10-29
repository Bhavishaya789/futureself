package app.futureself.mobile

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import androidx.core.app.NotificationCompat

object Notif {
    const val CH_FOCUS = "focus"
    const val CH_REMIND = "remind"

    fun channels(c: Context) {
        val nm = c.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        nm.createNotificationChannel(NotificationChannel(CH_FOCUS, "Study lock", NotificationManager.IMPORTANCE_LOW).apply {
            description = "Shown while FutureSelf watches for study sessions on your PC"
        })
        nm.createNotificationChannel(NotificationChannel(CH_REMIND, "Study reminders", NotificationManager.IMPORTANCE_HIGH).apply {
            description = "Your timetable reminders"
        })
    }

    private fun openApp(c: Context): PendingIntent =
        PendingIntent.getActivity(c, 0, Intent(c, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_SINGLE_TOP), PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT)

    fun focus(c: Context): Notification {
        channels(c)
        val txt = if (Lock.isActive(c)) "Phone is locked for your study time" else "Watching for study sessions on your PC"
        return NotificationCompat.Builder(c, CH_FOCUS)
            .setSmallIcon(R.drawable.ic_stat)
            .setContentTitle("FutureSelf")
            .setContentText(txt)
            .setOngoing(true)
            .setContentIntent(openApp(c))
            .build()
    }

    fun reminder(c: Context, id: String, title: String, body: String) {
        channels(c)
        val n = NotificationCompat.Builder(c, CH_REMIND)
            .setSmallIcon(R.drawable.ic_stat)
            .setContentTitle(title)
            .setContentText(body)
            .setAutoCancel(true)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setCategory(NotificationCompat.CATEGORY_REMINDER)
            .setContentIntent(openApp(c))
            .build()
        try {
            (c.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager).notify(id.hashCode(), n)
        } catch (e: SecurityException) { /* notifications are off */ }
    }
}
