package app.futureself.mobile

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.net.Uri
import org.json.JSONArray
import org.json.JSONObject

/** Timetable alarms. They use the clock-alarm mechanism, so they fire on time even in battery saver and need no special permission. */
object Reminders {
    private const val KEY = "reminders"

    private fun pi(ctx: Context, o: JSONObject, create: Boolean): PendingIntent? {
        val i = Intent(ctx, ReminderReceiver::class.java).setData(Uri.parse("fsreminder://" + Uri.encode(o.optString("id"))))
        i.putExtra("json", o.toString())
        val flags = PendingIntent.FLAG_IMMUTABLE or (if (create) PendingIntent.FLAG_UPDATE_CURRENT else PendingIntent.FLAG_NO_CREATE)
        return PendingIntent.getBroadcast(ctx, 0, i, flags)
    }

    private fun cancelAll(ctx: Context, am: AlarmManager) {
        val old = try { JSONArray(Store.getString(ctx, KEY, "[]")) } catch (e: Exception) { JSONArray() }
        for (i in 0 until old.length()) {
            val o = old.optJSONObject(i) ?: continue
            val p = pi(ctx, o, false)
            if (p != null) { am.cancel(p); p.cancel() }
        }
    }

    private fun schedule(ctx: Context, am: AlarmManager, o: JSONObject) {
        val show = PendingIntent.getActivity(ctx, 0, Intent(ctx, MainActivity::class.java), PendingIntent.FLAG_IMMUTABLE)
        val p = pi(ctx, o, true) ?: return
        am.setAlarmClock(AlarmManager.AlarmClockInfo(o.optLong("at"), show), p)
    }

    fun replaceAll(ctx: Context, json: String) {
        val app = ctx.applicationContext
        val am = app.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        cancelAll(app, am)
        val arr = try { JSONArray(json) } catch (e: Exception) { JSONArray() }
        val keep = JSONArray(); val now = System.currentTimeMillis()
        for (i in 0 until arr.length()) {
            val o = arr.optJSONObject(i) ?: continue
            if (o.optLong("at") <= now || o.optString("id").isEmpty()) continue
            schedule(app, am, o); keep.put(o)
        }
        Store.putString(app, KEY, keep.toString())
    }

    fun rescheduleFromStore(ctx: Context) {
        val app = ctx.applicationContext
        val am = app.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val arr = try { JSONArray(Store.getString(app, KEY, "[]")) } catch (e: Exception) { JSONArray() }
        val now = System.currentTimeMillis()
        for (i in 0 until arr.length()) {
            val o = arr.optJSONObject(i) ?: continue
            if (o.optLong("at") > now) schedule(app, am, o)
        }
    }
}

class ReminderReceiver : BroadcastReceiver() {
    override fun onReceive(ctx: Context, intent: Intent) {
        val o = try { JSONObject(intent.getStringExtra("json") ?: return) } catch (e: Exception) { return }
        Notif.reminder(ctx, o.optString("id"), o.optString("title", "FutureSelf"), o.optString("body"))
        if (o.optString("kind") == "start" && Store.getBool(ctx, "autoLockBlocks", false) &&
            o.optString("lock") != "gentle" && FocusAccessibilityService.isEnabled(ctx)
        ) {
            val mins = o.optInt("minutes", 25).coerceIn(1, 600)
            Lock.start(ctx, o.optString("subject", "Study time"), o.optString("topicId"), System.currentTimeMillis() + mins * 60000L, "phone", o.optString("lock"))
            Poller.begin(ctx)
            FocusAccessibilityService.enforce()
        }
    }
}

class BootReceiver : BroadcastReceiver() {
    override fun onReceive(ctx: Context, intent: Intent) {
        Reminders.rescheduleFromStore(ctx)
        if (Lock.isActive(ctx) || Link.paired(ctx) || Account.signedIn(ctx)) Poller.begin(ctx)
    }
}
