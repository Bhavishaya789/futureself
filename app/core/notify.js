// Optional outbound channels (phone reminders). Uses Node's built-in fetch.
async function post(url, payload, headers) {
  const r = await fetch(url, {
    method: 'POST',
    headers: Object.assign({ 'Content-Type': 'application/json' }, headers || {}),
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000)
  });
  return r.status >= 200 && r.status < 300;
}

function channels() {
  return {
    ntfy: true,
    telegram: !!process.env.TELEGRAM_BOT_TOKEN,
    email: !!process.env.SMTP_HOST,
    fcm: !!(process.env.FCM_SERVER_KEY || process.env.FCM_SERVICE_ACCOUNT_JSON),
    ai: !!process.env.ANTHROPIC_API_KEY
  };
}

async function deliver(settings, title, body) {
  const out = {};
  settings = settings || {};
  if (settings.ntfy_topic) {
    try {
      const server = (process.env.NTFY_SERVER || 'https://ntfy.sh').replace(/\/+$/, '');
      const h = process.env.NTFY_TOKEN ? { Authorization: 'Bearer ' + process.env.NTFY_TOKEN } : {};
      out.ntfy = await post(server, { topic: settings.ntfy_topic, title, message: body, priority: 4, tags: ['books', 'alarm_clock'] }, h);
    } catch (e) { out.ntfy = false; }
  }
  if (settings.telegram_chat_id && process.env.TELEGRAM_BOT_TOKEN) {
    try { out.telegram = await post('https://api.telegram.org/bot' + process.env.TELEGRAM_BOT_TOKEN + '/sendMessage', { chat_id: settings.telegram_chat_id, text: title + '\n' + body }); }
    catch (e) { out.telegram = false; }
  }
  return out;
}

module.exports = { deliver, channels };
