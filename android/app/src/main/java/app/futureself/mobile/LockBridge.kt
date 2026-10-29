package app.futureself.mobile

import android.app.Activity
import android.content.Intent
import android.webkit.JavascriptInterface
import org.json.JSONObject

/** What the lock screen page (blocker.html) may do. */
class LockBridge(private val act: Activity) {

    @JavascriptInterface
    fun info(): String {
        val on = Lock.isActive(act)
        val s = Lock.get(act)
        return JSONObject().put("active", on).put("subject", s.subject).put("endsAt", s.endsAt)
            .put("topicId", s.topicId).put("source", s.source).toString()
    }

    @JavascriptInterface
    fun contacts(): String = Contacts.load(act).toString()

    @JavascriptInterface
    fun call(number: String) { act.runOnUiThread { Dial.call(act, number) } }

    @JavascriptInterface
    fun openApp() {
        act.runOnUiThread {
            act.startActivity(Intent(act, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_REORDER_TO_FRONT))
        }
    }

    /** closes the lock screen, but only once the lock is really over */
    @JavascriptInterface
    fun finish() {
        if (!Lock.isActive(act)) act.runOnUiThread { act.finish() }
    }
}
