'use strict';
/* Small helper to ask the AI for a JSON answer. Google Gemini (free tier) is used first, then Anthropic, exactly like /api/check.
   The keys live only on the server. Tests can replace the network with global.__FS_FETCH. */
const L = require('./_lib');

const available = () => !!(process.env.GEMINI_API_KEY || process.env.ANTHROPIC_API_KEY);

async function askJSON(prompt, maxTokens) {
  const gKey = process.env.GEMINI_API_KEY, aKey = process.env.ANTHROPIC_API_KEY;
  if (!gKey && !aKey) L.fail(503, 'AI marking is not switched on on the server (GEMINI_API_KEY is missing).');
  const f = global.__FS_FETCH || fetch;
  let resp, txt;
  try {
    if (gKey) {
      resp = await f('https://generativelanguage.googleapis.com/v1beta/models/' + (process.env.FS_GEMINI_MODEL || 'gemini-2.5-flash') + ':generateContent', { method: 'POST', headers: { 'x-goog-api-key': gKey, 'content-type': 'application/json' }, body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: maxTokens || 900, temperature: 0.1, responseMimeType: 'application/json' } }) });
    } else {
      resp = await f('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'x-api-key': aKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' }, body: JSON.stringify({ model: process.env.FS_AI_MODEL || 'claude-sonnet-5-5', max_tokens: maxTokens || 900, messages: [{ role: 'user', content: [{ type: 'text', text: prompt }] }] }) });
    }
  } catch (e) { L.fail(502, 'Could not reach the AI service.'); }
  const j = await resp.json().catch(() => ({}));
  if (!resp.ok) L.fail(502, 'The AI service is busy or refused the request.');
  txt = gKey ? ((((j.candidates || [])[0] || {}).content || {}).parts || []).map((c) => c.text || '').join('') : (j.content || []).map((c) => c.text || '').join('');
  const m = txt.match(/\{[\s\S]*\}/);
  try { return JSON.parse(m[0]); } catch (e) { L.fail(502, 'The AI reply could not be read.'); }
}
module.exports = { askJSON, available };
