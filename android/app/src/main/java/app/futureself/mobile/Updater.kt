package app.futureself.mobile

import android.app.DownloadManager
import android.content.ContentValues
import android.content.Context
import android.content.Intent
import android.content.pm.PackageInfo
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.MediaStore
import android.provider.Settings
import androidx.core.content.FileProvider
import androidx.core.content.pm.PackageInfoCompat
import org.json.JSONObject
import java.io.File
import java.security.MessageDigest

/** In-app update: Android's own download manager fetches the new APK from the project's GitHub release
 *  (it resumes after network drops and keeps going in the background), then the APK is checked
 *  (checksum, newer version, same signing key as this app) and handed to Android's installer. */
object Updater {
    private val OK_URL = Regex("^https://github\\.com/[\\w.-]+/[\\w.-]+/releases/download/\\S+$")
    private const val SUB = "updates/FutureSelf-update.apk"

    @Volatile private var busy = false

    fun install(c: Context, url: String, sha: String): JSONObject {
        if (busy) return errJson("The update is still downloading. Please wait for it to finish.")
        busy = true
        try { return doInstall(c, url, sha) } finally { busy = false }
    }

    private fun doInstall(c: Context, url: String, sha: String): JSONObject {
        if (!OK_URL.matches(url)) return errJson("That update address is not allowed.")
        val want = sha.lowercase()
        if (want.isNotEmpty() && !Regex("^[a-f0-9]{64}$").matches(want)) return errJson("Bad update checksum.")
        if (!c.packageManager.canRequestPackageInstalls()) {
            // Android asks for this once: "Allow from this source" for FutureSelf
            try { c.startActivity(Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + c.packageName)).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)) } catch (e: Exception) { /* ignore */ }
            return errJson("Allow FutureSelf to install updates (the switch that just opened), come back, and press Update again.").put("needPermission", true)
        }
        val base = c.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS) ?: return errJson("This phone has no storage free for the download.")
        val file = File(base, SUB)
        file.parentFile?.deleteRecursively(); file.parentFile?.mkdirs()

        // 1. download with Android's download manager
        val dm = c.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
        val req = DownloadManager.Request(Uri.parse(url))
            .setTitle("FutureSelf update")
            .setDescription("Downloading the new version")
            .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE)
            .setAllowedOverMetered(true)
            .setAllowedOverRoaming(true)
            .setDestinationInExternalFilesDir(c, Environment.DIRECTORY_DOWNLOADS, SUB)
        val id = try { dm.enqueue(req) } catch (e: Exception) { return errJson("Android could not start the download: " + (e.message ?: "")) }
        var last = -1
        var lastBytes = -1L
        var lastMove = System.currentTimeMillis()
        var done = false
        while (!done) {
            Thread.sleep(500)
            val cur = dm.query(DownloadManager.Query().setFilterById(id)) ?: continue
            var status: Int
            var reason: Int
            var got: Long
            var total: Long
            try {
                if (!cur.moveToFirst()) return errJson("The download was cancelled.")
                status = cur.getInt(cur.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS))
                reason = cur.getInt(cur.getColumnIndexOrThrow(DownloadManager.COLUMN_REASON))
                got = cur.getLong(cur.getColumnIndexOrThrow(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR))
                total = cur.getLong(cur.getColumnIndexOrThrow(DownloadManager.COLUMN_TOTAL_SIZE_BYTES))
            } finally { cur.close() }
            if (total > 0) {
                val pct = (got * 100 / total).toInt().coerceIn(0, 100)
                if (pct != last) { last = pct; MainActivity.emit("{\"type\":\"update\",\"pct\":$pct}") }
            }
            val now = System.currentTimeMillis()
            if (got != lastBytes) { lastBytes = got; lastMove = now }
            when (status) {
                DownloadManager.STATUS_SUCCESSFUL -> done = true
                DownloadManager.STATUS_FAILED -> { dm.remove(id); return errJson("The download failed (Android reason $reason). Check your internet and press Update again.") }
                else -> if (now - lastMove > 10 * 60 * 1000L) { dm.remove(id); return errJson("The download stopped for 10 minutes. Check your internet and press Update again.") }
            }
        }

        // 2. checks: size, checksum, same app, newer version, same signing key
        if (!file.exists() || file.length() < 500_000L) return errJson("The downloaded file is too small to be the app. Press Update again.")
        if (want.isNotEmpty()) {
            val md = MessageDigest.getInstance("SHA-256")
            file.inputStream().use { ins -> val buf = ByteArray(64 * 1024); while (true) { val n = ins.read(buf); if (n < 0) break; md.update(buf, 0, n) } }
            val have = md.digest().joinToString("") { "%02x".format(it) }
            if (have != want) { file.delete(); return errJson("The download did not match its checksum, so it was thrown away. Press Update again.") }
        }
        val pm = c.packageManager
        @Suppress("DEPRECATION")
        val flags = if (Build.VERSION.SDK_INT >= 28) PackageManager.GET_SIGNING_CERTIFICATES else PackageManager.GET_SIGNATURES
        val newPi = pm.getPackageArchiveInfo(file.path, flags) ?: return errJson("The downloaded file is not a valid Android app. Press Update again.")
        if (newPi.packageName != c.packageName) return errJson("The downloaded file is a different app, so it was not installed.")
        val curPi = pm.getPackageInfo(c.packageName, flags)
        val newCode = PackageInfoCompat.getLongVersionCode(newPi)
        val curCode = PackageInfoCompat.getLongVersionCode(curPi)
        if (newCode <= curCode) {
            return errJson("This phone already has FutureSelf ${curPi.versionName} (build $curCode), and the download is ${newPi.versionName} (build $newCode), which is not newer, so Android would not install it.")
        }
        val newSigs = signers(newPi)
        val curSigs = signers(curPi)
        if (newSigs.isNotEmpty() && curSigs.isNotEmpty() && newSigs.intersect(curSigs).isEmpty()) {
            // Android never updates an app signed with a different key. One time only: remove the old app, install the new one.
            val where = keepCopy(c, file, "FutureSelf-${newPi.versionName}.apk")
            return errJson("The FutureSelf on this phone was signed with an older key, so Android will not update it directly. " +
                "Do this once: 1) sign in on the website or note your account, 2) uninstall FutureSelf, 3) open " +
                (where ?: "the FutureSelf website") + " and install the new version. After you sign in again, your account and progress come back from the server. Later updates will work with one tap.")
                .put("reinstall", true)
        }

        // 3. Android's installer
        return try {
            val uri = FileProvider.getUriForFile(c, c.packageName + ".fileprovider", file)
            c.startActivity(Intent(Intent.ACTION_VIEW).setDataAndType(uri, "application/vnd.android.package-archive")
                .addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_ACTIVITY_NEW_TASK))
            okJson().put("version", newPi.versionName ?: "")
        } catch (e: Exception) { errJson("Android would not open the installer: " + (e.message ?: "")) }
    }

    /** SHA-256 of each signing certificate (current and past keys of a rotated signer) */
    private fun signers(pi: PackageInfo): Set<String> {
        val certs = try {
            if (Build.VERSION.SDK_INT >= 28) {
                val si = pi.signingInfo ?: return emptySet()
                if (si.hasMultipleSigners()) si.apkContentsSigners else si.signingCertificateHistory
            } else {
                @Suppress("DEPRECATION") pi.signatures
            }
        } catch (e: Exception) { null } ?: return emptySet()
        val md = MessageDigest.getInstance("SHA-256")
        return certs.map { s -> md.digest(s.toByteArray()).joinToString("") { "%02x".format(it) } }.toSet()
    }

    /** a copy of the APK in Downloads/FutureSelf (kept when the old app is uninstalled); returns where it is, or null */
    private fun keepCopy(c: Context, file: File, name: String): String? {
        if (Build.VERSION.SDK_INT < 29) return null
        return try {
            val v = ContentValues().apply {
                put(MediaStore.MediaColumns.DISPLAY_NAME, name)
                put(MediaStore.MediaColumns.MIME_TYPE, "application/vnd.android.package-archive")
                put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/FutureSelf")
            }
            val uri = c.contentResolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, v) ?: return null
            val os = c.contentResolver.openOutputStream(uri) ?: return null
            os.use { out -> file.inputStream().use { it.copyTo(out) } }
            "Downloads/FutureSelf/$name"
        } catch (e: Exception) { null }
    }
}
