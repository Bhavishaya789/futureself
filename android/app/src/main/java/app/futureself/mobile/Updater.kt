package app.futureself.mobile

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.provider.Settings
import androidx.core.content.FileProvider
import org.json.JSONObject
import java.io.File
import java.net.HttpURLConnection
import java.net.URL
import java.security.MessageDigest

/** Downloads the new APK from the project's GitHub release, checks it, and hands it to Android's installer (one tap on "Update"). */
object Updater {
    private val OK_URL = Regex("^https://github\\.com/[\\w.-]+/[\\w.-]+/releases/download/\\S+$")
    private fun okHost(h: String) = h == "github.com" || h.endsWith(".githubusercontent.com")

    fun install(c: Context, url: String, sha: String): JSONObject {
        if (!OK_URL.matches(url)) return errJson("That update address is not allowed.")
        val want = sha.lowercase()
        if (want.isNotEmpty() && !Regex("^[a-f0-9]{64}$").matches(want)) return errJson("Bad update checksum.")
        if (!c.packageManager.canRequestPackageInstalls()) {
            // Android asks for this once: "Allow from this source" for FutureSelf
            try { c.startActivity(Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + c.packageName)).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)) } catch (e: Exception) { /* ignore */ }
            return errJson("Allow FutureSelf to install updates (the switch that just opened), come back, and press Update again.").put("needPermission", true)
        }
        val dir = File(c.cacheDir, "updates"); dir.deleteRecursively(); dir.mkdirs()
        val file = File(dir, "FutureSelf-update.apk")
        var conn: HttpURLConnection? = null
        try {
            conn = URL(url).openConnection() as HttpURLConnection
            conn.connectTimeout = 15000; conn.readTimeout = 30000; conn.instanceFollowRedirects = true
            if (conn.responseCode != 200) return errJson("The download failed (${conn.responseCode}). Try again later.")
            if (!okHost(conn.url.host) || conn.url.protocol != "https") return errJson("The download came from an address that is not allowed.")
            val total = conn.contentLengthLong
            val md = MessageDigest.getInstance("SHA-256")
            var got = 0L; var last = -1
            conn.inputStream.use { ins -> file.outputStream().use { out ->
                val buf = ByteArray(64 * 1024)
                while (true) {
                    val n = ins.read(buf); if (n < 0) break
                    out.write(buf, 0, n); md.update(buf, 0, n); got += n
                    val pct = if (total > 0) (got * 100 / total).toInt() else 0
                    if (pct != last) { last = pct; MainActivity.emit("{\"type\":\"update\",\"pct\":$pct}") }
                }
            } }
            if (got < 500_000L) { file.delete(); return errJson("The downloaded file is too small to be the app.") }
            val have = md.digest().joinToString("") { "%02x".format(it) }
            if (want.isNotEmpty() && have != want) { file.delete(); return errJson("The download did not match its checksum, so it was thrown away. Try again.") }
        } catch (e: Exception) {
            file.delete(); return errJson("The download did not finish. Check your internet and try again.")
        } finally { conn?.disconnect() }
        return try {
            val uri = FileProvider.getUriForFile(c, c.packageName + ".fileprovider", file)
            c.startActivity(Intent(Intent.ACTION_VIEW).setDataAndType(uri, "application/vnd.android.package-archive")
                .addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_ACTIVITY_NEW_TASK))
            okJson()
        } catch (e: Exception) { errJson("Android would not open the installer: " + (e.message ?: "")) }
    }
}
