package app.futureself.mobile

import android.content.Context
import android.media.AudioManager
import android.os.Build
import android.telecom.Call
import android.telecom.CallScreeningService

/** Phone calls during a study lock: the timer stops while a call is going and starts again when it ends, and phone apps may show on top of the lock. */
object Calls {
    @Volatile private var since = 0L        // when the current call began (0 = no call)
    @Volatile private var graceUntil = 0L   // just pressed Call: let the phone app open
    @Volatile private var cachePkgs: Set<String> = emptySet()
    @Volatile private var cacheAt = 0L

    fun onCall(): Boolean = since != 0L
    fun pausedAt(): Long = since

    fun grace(c: Context, ms: Long) { graceUntil = System.currentTimeMillis() + ms; cacheAt = 0L }

    fun inCall(c: Context): Boolean = try {
        (c.getSystemService(Context.AUDIO_SERVICE) as AudioManager).mode == AudioManager.MODE_IN_CALL
    } catch (e: Exception) { false }

    /** the phone apps (Phone, Truecaller...) that may show over the lock while a call is being made or is running */
    fun dialerPkgs(c: Context): Set<String> {
        val now = System.currentTimeMillis()
        if (now - cacheAt > 30000L) {
            cachePkgs = Dial.apps(c).map { it.first }.toSet()
            cacheAt = now
        }
        return cachePkgs
    }

    fun allows(c: Context, pkg: String): Boolean =
        (since != 0L || System.currentTimeMillis() < graceUntil) && pkg in dialerPkgs(c)

    /** called every second while a lock runs */
    fun tick(c: Context) {
        val now = System.currentTimeMillis()
        val on = inCall(c)
        if (on && since == 0L) {
            since = now
            MainActivity.emit("{\"type\":\"call\",\"on\":true}")
        } else if (!on && since != 0L) {
            val d = now - since
            since = 0L
            val st = Lock.get(c)
            if (st.active && st.source == "phone") Lock.extend(c, d)
            MainActivity.emit("{\"type\":\"call\",\"on\":false,\"ms\":$d}")
        }
    }
}

/** While a study lock is on, a call from a number that is not in the emergency list is turned away; listed numbers ring as normal. */
class CallGuard : CallScreeningService() {
    override fun onScreenCall(details: Call.Details) {
        val b = CallScreeningService.CallResponse.Builder()
        try {
            val incoming = Build.VERSION.SDK_INT < 29 || details.callDirection == Call.Details.DIRECTION_INCOMING
            if (incoming && Lock.isActive(this)) {
                val num = details.handle?.schemeSpecificPart ?: ""
                if (!Contacts.matches(this, num)) b.setDisallowCall(true).setRejectCall(true).setSkipNotification(true)
            }
        } catch (e: Exception) { /* on any doubt, let the call through */ }
        respondToCall(details, b.build())
    }
}
