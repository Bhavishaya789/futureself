package app.futureself.mobile

import android.net.Uri

/** While a study video plays, the player may load only that one video. Search, recommendations, channel pages and other videos are refused. */
object YtGuard {
    @Volatile var allowed: String? = null
    private val ID = Regex("^[A-Za-z0-9_-]{11}$")
    private val HOSTS = setOf(
        "youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com",
        "youtube-nocookie.com", "www.youtube-nocookie.com", "youtu.be"
    )
    private val NAV = Regex("^/(watch|results|shorts|playlist|feed|live|hashtag|c/|channel/|user/|@|gaming|trending|premium|account|signin)", RegexOption.IGNORE_CASE)
    private val API = Regex("^/youtubei/v1/(search|browse|guide|music|notification|account|subscription|playlist|share)", RegexOption.IGNORE_CASE)

    fun allow(id: String): Boolean {
        allowed = if (ID.matches(id)) id else null
        return allowed != null
    }

    fun blocked(u: Uri): Boolean {
        val host = (u.host ?: return false).lowercase()
        if (host !in HOSTS) return false
        if (host == "youtu.be" || host == "music.youtube.com") return true
        val path = u.path ?: "/"
        val m = Regex("^/embed/([^/]+)").find(path)
        if (m != null) return !(ID.matches(m.groupValues[1]) && m.groupValues[1] == allowed)
        if (path == "/" || path.isEmpty()) return true
        if (NAV.containsMatchIn(path)) return true
        if (API.containsMatchIn(path)) return true
        return false
    }
}
