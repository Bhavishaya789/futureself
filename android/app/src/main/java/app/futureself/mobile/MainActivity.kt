package app.futureself.mobile

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebView
import androidx.activity.OnBackPressedCallback
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import org.json.JSONObject
import java.lang.ref.WeakReference

/** The FutureSelf app itself: the same screens as the PC app inside a WebView, plus the phone bridge. */
class MainActivity : AppCompatActivity() {
    lateinit var web: WebView
    private var fileCb: ValueCallback<Array<Uri>>? = null

    private val chooser = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { r ->
        fileCb?.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(r.resultCode, r.data))
        fileCb = null
    }

    companion object {
        private var current: WeakReference<MainActivity>? = null

        /** sends an event ({"type":...}) to the page, if the app is open */
        fun emit(json: String) {
            val a = current?.get() ?: return
            a.runOnUiThread { a.web.evaluateJavascript("window.__fsEvent&&window.__fsEvent(" + JSONObject.quote(json) + ")", null) }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Notif.channels(this)
        web = WebView(this)
        Web.configure(web)
        web.webViewClient = Web.client(this)
        web.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(view: WebView, cb: ValueCallback<Array<Uri>>, params: FileChooserParams): Boolean {
                fileCb?.onReceiveValue(null)
                fileCb = cb
                return try { chooser.launch(params.createIntent()); true } catch (e: Exception) { fileCb = null; false }
            }
        }
        web.addJavascriptInterface(AndroidBridge(this, web), "AndroidBridge")
        setContentView(web)
        current = WeakReference(this)
        if (savedInstanceState == null) web.loadUrl(Web.HOME) else web.restoreState(savedInstanceState)
        handleDeepLink(intent)

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (web.canGoBack()) web.goBack() else moveTaskToBack(true)
            }
        })
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        handleDeepLink(intent)
    }

    /** futureself://auth?ticket=...  (the browser sends the student back here after Google sign-in) */
    private fun handleDeepLink(intent: Intent?) {
        val d = intent?.data ?: return
        if (d.scheme != "futureself" || d.host != "auth") return
        val t = d.getQueryParameter("ticket") ?: ""
        val ok = Regex("^[a-f0-9]{48}$").matches(t)
        emit("{\"type\":\"auth\",\"ticket\":" + JSONObject.quote(if (ok) t else "") + "}")
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        web.saveState(outState)
    }

    override fun onResume() {
        super.onResume()
        current = WeakReference(this)
        web.onResume()
        if (Link.paired(this) && Store.getBool(this, "restrictOnPc", true)) Poller.begin(this)
        if (Lock.isActive(this)) Poller.ensure(this)
        web.evaluateJavascript("window.__fsEvent&&window.__fsEvent('{\"type\":\"refresh\"}')", null)
    }

    override fun onPause() {
        web.onPause()
        super.onPause()
    }

    override fun onDestroy() {
        if (current?.get() === this) current = null
        super.onDestroy()
    }
}
