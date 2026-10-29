package app.futureself.mobile

import android.os.Build
import android.os.Bundle
import android.view.WindowManager
import android.webkit.WebView
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity

/** The 3D lock screen shown over every other app during a study lock. Shows the timer and the emergency call buttons. */
class BlockerActivity : AppCompatActivity() {
    private var web: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (!Lock.isActive(this)) { finish(); return }
        if (Build.VERSION.SDK_INT >= 27) {
            setShowWhenLocked(true)
            setTurnScreenOn(true)
        } else {
            @Suppress("DEPRECATION")
            window.addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED or WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON)
        }
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        val wv = WebView(this)
        Web.configure(wv)
        wv.webViewClient = Web.client(this)
        wv.addJavascriptInterface(LockBridge(this), "LockBridge")
        setContentView(wv)
        wv.loadUrl(Web.BLOCKER)
        web = wv

        // Back does nothing: the way out is "Back to FutureSelf" or waiting for the timer
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() { /* locked */ }
        })
    }

    override fun onResume() {
        super.onResume()
        if (!Lock.isActive(this)) finish()
    }

    override fun onDestroy() {
        web?.destroy()
        web = null
        super.onDestroy()
    }
}
