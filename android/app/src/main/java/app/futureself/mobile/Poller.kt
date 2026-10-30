package app.futureself.mobile

import android.content.Context
import android.content.Intent
import android.os.Build

/** Background loop: ends phone locks on time, and follows the PC (locks the phone while a PC session runs).
 *  A session that this phone started itself (src = phone) is never followed back, otherwise the two would lock each other. */
object Poller {
    @Volatile private var thread: Thread? = null
    private val lockObj = Any()

    /** start the loop (and the notification that keeps the phone from putting it to sleep) */
    fun begin(ctx: Context) {
        val app = ctx.applicationContext
        try {
            val i = Intent(app, FocusService::class.java)
            if (Build.VERSION.SDK_INT >= 26) app.startForegroundService(i) else app.startService(i)
        } catch (e: Exception) { /* not allowed right now; the loop still runs while the app process lives */ }
        ensure(app)
    }

    fun ensure(ctx: Context) {
        val app = ctx.applicationContext
        synchronized(lockObj) {
            if (thread?.isAlive == true) return
            val t = Thread { loop(app) }
            t.isDaemon = true
            t.name = "fs-poller"
            thread = t
            t.start()
        }
    }

    private fun follows(app: Context): Boolean =
        (Account.signedIn(app) || Link.paired(app)) && Store.getBool(app, "restrictOnPc", true)

    private fun wanted(app: Context): Boolean = follows(app) || Lock.isActive(app)

    private fun loop(app: Context) {
        var fails = 0
        while (wanted(app)) {
            try {
                if (follows(app)) {
                    // the account (through the server) works on any network; the Wi-Fi link is the fallback
                    val r = if (Account.signedIn(app)) Account.state(app) else Link.state(app)
                    val st = Lock.get(app)
                    if (r != null) {
                        fails = 0
                        if (r.optBoolean("restrict") && r.optString("src", "pc") != "phone") {
                            if (!(st.active && st.source == "phone")) {
                                Lock.start(app, r.optString("subject", "Study session").ifEmpty { "Study session" }, r.optString("topicId"), r.optLong("endsAt"), "pc")
                                FocusAccessibilityService.enforce()
                            }
                        } else if (st.active && st.source == "pc") {
                            Lock.stop(app)
                        }
                    } else {
                        fails++
                        if (fails % 10 == 0 && !Account.signedIn(app)) Link.rediscover(app)
                        // PC cannot be reached: keep the lock only until the time the PC told us
                        if (st.active && st.source == "pc" && System.currentTimeMillis() > st.endsAt + 120000L) Lock.stop(app)
                    }
                }
                Lock.isActive(app) // ends timed locks
            } catch (t: Throwable) { /* keep going */ }
            try { Thread.sleep(if (Account.signedIn(app)) 4000L else 3000L) } catch (e: InterruptedException) { break }
        }
        synchronized(lockObj) { thread = null }
        try { app.stopService(Intent(app, FocusService::class.java)) } catch (e: Exception) { /* ignore */ }
    }
}
