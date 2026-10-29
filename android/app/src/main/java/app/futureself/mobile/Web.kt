package app.futureself.mobile

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Color
import android.net.Uri
import android.view.View
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.webkit.WebViewAssetLoader
import java.io.ByteArrayInputStream

/** Shared WebView set-up. The app pages are served from inside the APK, nothing is loaded from a website. */
object Web {
    const val HOST = "appassets.androidplatform.net"
    const val HOME = "https://$HOST/assets/www/index.html"
    const val BLOCKER = "https://$HOST/assets/www/blocker.html"

    @SuppressLint("SetJavaScriptEnabled")
    fun configure(wv: WebView) {
        val s = wv.settings
        s.javaScriptEnabled = true
        s.domStorageEnabled = true
        s.databaseEnabled = true
        s.allowFileAccess = false
        s.allowContentAccess = false
        s.mediaPlaybackRequiresUserGesture = false
        s.setSupportMultipleWindows(false)
        s.mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
        wv.setBackgroundColor(Color.parseColor("#0A0B1A"))
        wv.overScrollMode = View.OVER_SCROLL_NEVER
    }

    fun client(ctx: Context): WebViewClient {
        val loader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(ctx))
            .build()
        return object : WebViewClient() {
            override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? {
                val u: Uri = request.url
                if (u.host == HOST) return loader.shouldInterceptRequest(u)
                if (YtGuard.blocked(u)) {
                    return WebResourceResponse("text/plain", "utf-8", 403, "Blocked", emptyMap(), ByteArrayInputStream(ByteArray(0)))
                }
                return null
            }

            // the top page can never leave the app
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean =
                request.url.host != HOST
        }
    }
}
