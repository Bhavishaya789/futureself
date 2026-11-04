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
import androidx.core.content.FileProvider
import java.io.File
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

    /** "Take photo with camera" in the practice page: opens the camera itself and hands the picture to the page */
    private var camUri: Uri? = null
    private val camera = registerForActivityResult(ActivityResultContracts.TakePicture()) { ok ->
        val u = camUri
        fileCb?.onReceiveValue(if (ok && u != null) arrayOf(u) else null)
        fileCb = null
        camUri = null
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
                if (params.isCaptureEnabled) {
                    try {
                        val dir = File(cacheDir, "cam").apply { mkdirs() }
                        dir.listFiles()?.forEach { if (System.currentTimeMillis() - it.lastModified() > 3600_000) it.delete() }
                        val f = File.createTempFile("answer", ".jpg", dir)
                        camUri = FileProvider.getUriForFile(this@MainActivity, "$packageName.fileprovider", f)
                        camera.launch(camUri!!)
                        return true
                    } catch (e: Exception) { camUri = null /* no camera app: fall back to the normal picker below */ }
                }
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
        if ((Link.paired(this) || Account.signedIn(this)) && Store.getBool(this, "restrictOnPc", true)) Poller.begin(this)
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
