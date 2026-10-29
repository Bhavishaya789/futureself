package app.futureself.mobile

import android.app.Service
import android.content.Intent
import android.content.pm.ServiceInfo
import android.os.Build
import android.os.IBinder

/** Only holds the "FutureSelf is watching" notification so Android keeps the background loop alive. */
class FocusService : Service() {
    override fun onBind(intent: Intent?): IBinder? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        try {
            val n = Notif.focus(this)
            if (Build.VERSION.SDK_INT >= 34) startForeground(1001, n, ServiceInfo.FOREGROUND_SERVICE_TYPE_SPECIAL_USE)
            else startForeground(1001, n)
        } catch (e: Exception) {
            stopSelf()
            return START_NOT_STICKY
        }
        Poller.ensure(this)
        return START_STICKY
    }
}
