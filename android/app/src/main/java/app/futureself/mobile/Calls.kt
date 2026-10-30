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

    /** is FutureSelf the phone's call-screening app (the thing that turns unlisted callers away)? */
    fun guardOn(c: Context): Boolean = try {
        Build.VERSION.SDK_INT < 29 || c.getSystemService(android.app.role.RoleManager::class.java).isRoleHeld(android.app.role.RoleManager.ROLE_CALL_SCREENING)
    } catch (e: Exception) { false }

    fun lastCheck(c: Context): String = Store.getString(c, "cg_last")

    fun onCall(): Boolean = since != 0L
    fun pausedAt(): Long = since

    fun grace(c: Context, ms: Long) { graceUntil = System.currentTimeMillis() + ms; cacheAt = 0L }

    fun inCall(c: Context): Boolean = try {
        (c.getSystemService(Context.AUDIO_SERVICE) as AudioManager).mode == AudioManager.MODE_IN_CALL
    } catch (e: Exception) { false }

    /** an allowed call is ringing (calls from numbers outside the list are turned away before they ring) */
    fun ringing(c: Context): Boolean = try {
        (c.getSystemService(Context.AUDIO_SERVICE) as AudioManager).mode == AudioManager.MODE_RINGTONE
    } catch (e: Exception) { false }

    /** the phone's call screens (in-call, incoming) may show over the lock only while a call is really happening.
     *  The bare dial pad is never allowed, so nobody can dial a number that is not on the list. */
    fun callScreenOk(c: Context): Boolean = since != 0L || inCall(c) || ringing(c) || System.currentTimeMillis() < graceUntil

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

/** While a Focus or Strict lock is on, the phone only takes calls to and from the emergency list.
 *  Incoming: a number not on the list is turned away before it rings; a listed number rings normally (the phone's call screen pops up).
 *  Outgoing: a number not on the list is stopped, so the dial pad cannot be used to call anyone else.
 *  With no lock (Gentle mode or no session) every call goes through as usual. */
class CallGuard : CallScreeningService() {
    override fun onScreenCall(details: Call.Details) {
        val b = CallScreeningService.CallResponse.Builder()
        try {
            if (Lock.isActive(this)) {
                val num = details.handle?.schemeSpecificPart ?: ""
                val ok = Contacts.matches(this, num)
                if (!ok) b.setDisallowCall(true).setRejectCall(true).setSkipNotification(true)
                val t = java.text.SimpleDateFormat("HH:mm", java.util.Locale.US).format(java.util.Date())
                Store.putString(this, "cg_last", t + "  " + (if (num.isEmpty()) "hidden number" else num.takeLast(4).padStart(num.length.coerceAtMost(10), '*')) + (if (ok) "  allowed" else "  turned away"))
            }
        } catch (e: Exception) { /* on any doubt, let the call through */ }
        respondToCall(details, b.build())
    }
}
