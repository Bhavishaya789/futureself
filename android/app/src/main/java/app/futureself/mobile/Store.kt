package app.futureself.mobile

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.content.pm.PackageManager
import android.net.Uri
import org.json.JSONArray
import org.json.JSONObject

/** Small helpers for the values the phone keeps (settings, lock, emergency contacts). Everything stays on the phone. */
object Store {
    fun prefs(c: Context): SharedPreferences =
        c.applicationContext.getSharedPreferences("futureself", Context.MODE_PRIVATE)

    fun getString(c: Context, k: String, d: String = ""): String = prefs(c).getString(k, d) ?: d
    fun putString(c: Context, k: String, v: String) { prefs(c).edit().putString(k, v).apply() }
    fun getBool(c: Context, k: String, d: Boolean): Boolean {
        val v = prefs(c).getString(k, null) ?: return d
        return v == "true"
    }
}

fun okJson(): JSONObject = JSONObject().put("ok", true)
fun errJson(msg: String): JSONObject = JSONObject().put("ok", false).put("error", msg)

data class LockState(
    val active: Boolean,
    val subject: String,
    val topicId: String,
    val endsAt: Long,
    val startedAt: Long,
    val source: String, // "phone" or "pc"
    val mode: String = "focus" // "focus" or "strict"
)

/** The lock itself. It is saved to disk, so it survives the app being closed or the phone restarting. */
object Lock {
    private const val MAX_MS = 12L * 3600 * 1000 // safety: a lock can never last longer than 12 hours

    fun get(c: Context): LockState {
        val p = Store.prefs(c)
        return LockState(
            p.getBoolean("lock_active", false),
            p.getString("lock_subject", "") ?: "",
            p.getString("lock_topic", "") ?: "",
            p.getLong("lock_ends", 0L),
            p.getLong("lock_started", 0L),
            p.getString("lock_source", "phone") ?: "phone",
            if (p.getString("lock_mode", "focus") == "strict") "strict" else "focus"
        )
    }

    fun isActive(c: Context): Boolean {
        val s = get(c)
        if (!s.active) return false
        val now = System.currentTimeMillis()
        if (now - s.startedAt > MAX_MS) { stop(c); return false }
        if (s.source == "phone" && now >= s.endsAt && !Calls.onCall()) { stop(c); return false }
        return true
    }

    fun start(c: Context, subject: String, topicId: String, endsAt: Long, source: String, mode: String = "focus") {
        val old = get(c)
        val keepStart = if (old.active && old.source == source) old.startedAt else System.currentTimeMillis()
        Store.prefs(c).edit()
            .putBoolean("lock_active", true)
            .putString("lock_subject", subject.take(80))
            .putString("lock_topic", topicId.take(80))
            .putLong("lock_ends", endsAt)
            .putLong("lock_started", keepStart)
            .putString("lock_source", source)
            .putString("lock_mode", if (mode == "strict") "strict" else "focus")
            .apply()
    }

    /** a phone call does not count as study time: the end moves later by as long as the call lasted */
    fun extend(c: Context, ms: Long) {
        if (ms <= 0) return
        val p = Store.prefs(c)
        p.edit().putLong("lock_ends", p.getLong("lock_ends", 0L) + ms).putLong("lock_started", p.getLong("lock_started", 0L) + ms).apply()
    }

    fun stop(c: Context) {
        Store.prefs(c).edit().putBoolean("lock_active", false).apply()
    }
}

/** Up to five emergency contacts. Numbers are checked and normalised before they are saved. */
object Contacts {
    const val MAX = 5
    private val NUM = Regex("^\\+?[0-9]{3,15}$")

    /** same number even if one side has +91 / 0 in front */
    fun matches(c: Context, raw: String): Boolean {
        val d = raw.filter { it.isDigit() }
        if (d.length < 3) return false
        val tail = d.takeLast(10)
        if (d == "112") return true
        return numbers(c).any { val x = it.filter { ch -> ch.isDigit() }; x.length >= 3 && x.takeLast(10) == tail }
    }

    fun normalize(raw: String): String? {
        val n = raw.replace(Regex("[\\s\\-().]"), "")
        return if (NUM.matches(n)) n else null
    }

    fun load(c: Context): JSONArray {
        return try { JSONArray(Store.getString(c, "contacts", "[]")) } catch (e: Exception) { JSONArray() }
    }

    fun numbers(c: Context): Set<String> {
        val a = load(c); val out = HashSet<String>()
        for (i in 0 until a.length()) a.optJSONObject(i)?.optString("number")?.let { out.add(it) }
        return out
    }

    /** returns an error message, or null when saved */
    fun save(c: Context, raw: String): String? {
        val a = try { JSONArray(raw) } catch (e: Exception) { return "Could not read the contact list" }
        if (a.length() > MAX) return "You can add at most $MAX numbers"
        val out = JSONArray(); val seen = HashSet<String>()
        for (i in 0 until a.length()) {
            val o = a.optJSONObject(i) ?: return "Could not read the contact list"
            val name = o.optString("name").trim().take(30)
            if (name.isEmpty()) return "Every contact needs a name"
            val num = normalize(o.optString("number")) ?: return "\"${o.optString("number")}\" is not a valid phone number"
            if (!seen.add(num)) return "The number $num is added twice"
            out.put(JSONObject().put("name", name).put("number", num))
        }
        Store.putString(c, "contacts", out.toString())
        return null
    }
}

/** Calls only numbers the student saved, plus 112. The page cannot dial anything else. */
object Dial {
    private fun check(c: Context, raw: String): String? {
        val n = Contacts.normalize(raw) ?: return null
        return if (n == "112" || Contacts.numbers(c).contains(n)) n else null
    }

    /** The Call button places the call straight from FutureSelf. No dial pad is ever opened while a lock runs.
     *  Outside a lock (Gentle mode, or no session) the phone behaves as usual, so the dialer is the fallback there. */
    fun call(c: Context, raw: String): JSONObject {
        val n = Contacts.normalize(raw) ?: return errJson("That is not a phone number")
        if (check(c, n) == null) return errJson("That number is not in your emergency list")
        val granted = c.checkSelfPermission(Manifest.permission.CALL_PHONE) == PackageManager.PERMISSION_GRANTED
        val locked = Lock.isActive(c)
        val uri = Uri.parse("tel:" + Uri.encode(n))
        if (!granted && locked) return errJson("Calls are not allowed yet. Open FutureSelf after the session and allow the Phone permission in the setup guide.")
        Calls.grace(c, 20000L)
        if (granted) {
            try { c.startActivity(Intent(Intent.ACTION_CALL, uri).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); return okJson().put("direct", true) } catch (e: Exception) { /* try Telecom below */ }
            try {
                (c.getSystemService(Context.TELECOM_SERVICE) as android.telecom.TelecomManager).placeCall(uri, null)
                return okJson().put("direct", true)
            } catch (e: Exception) { /* fall through */ }
        }
        if (locked) return errJson("This phone would not place the call. Check the Phone permission for FutureSelf.")
        return try { c.startActivity(Intent(Intent.ACTION_DIAL, uri).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); okJson().put("direct", false) } catch (e: Exception) { errJson("This phone cannot place calls") }
    }

    private fun say(c: Context, msg: String) { android.widget.Toast.makeText(c, msg, android.widget.Toast.LENGTH_LONG).show() }

    /** the Call button for the lock screen and the app: shows why when a call cannot start */
    fun press(act: Activity, raw: String) {
        val r = call(act, raw)
        if (!r.optBoolean("ok", true)) say(act, r.optString("error"))
    }
}
