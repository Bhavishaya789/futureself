# FutureSelf security notes (v1.4.0)

## What was checked and fixed in this version
| Area | Problem | Fix |
|---|---|---|
| Server | API answered requests from any website (open CORS) | Removed. Only our own pages and the apps use it |
| Server | No limit on password guessing from one network | 40 tries / 10 min per network, plus the per-account lock that already existed |
| Server | Unknown-email logins were faster than real ones (could reveal which emails exist) | Same work is done either way |
| Server | A stolen sign-in token could not be cancelled | New "sign out everywhere" action: every old token stops working at once |
| Server | A session could lock the other device for any length of time | Capped at 12 hours |
| Server | No browser security headers | `website/vercel.json`: HTTPS-only (HSTS), no framing, strict content policy, no referrer, no sniffing |
| Server | Outdated email library with known issues | nodemailer upgraded; `npm audit` shows 0 problems |
| Android | Sign-in token kept as plain text in app storage | Encrypted with a key held in the phone's Keystore (old tokens are upgraded automatically) |
| Android | Plain HTTP allowed | Switched off. Everything uses HTTPS. The old same-Wi-Fi PC pairing card is hidden |
| Windows | Sign-in token kept as plain text in `account.json` | Encrypted with the Windows account (DPAPI via Electron safeStorage) |
| Windows | Web permission requests (camera, location...) were not blocked | All denied except full-screen video |
| Windows | Sign-in address check also accepted `http://localhost.evil.com` | Now only https, or `127.0.0.1` / `localhost` with a port |

## Already in place
Passwords are stored as salted scrypt hashes. Tokens are HMAC-signed and expire after 90 days. Email codes are hashed, expire, and lock after 5 wrong tries. Google tokens are checked for audience, issuer, expiry and verified email. Browser sign-in uses a one-time ticket that only the app that started it can redeem. Window/page isolation (sandbox, context isolation) is on for Windows; the Android WebView loads only pages from inside the APK and blocks file access. Videos can only play the one embed the app chose.

## Honest limits (not fixable by code alone)
* The apps are **not code-signed**, so Windows SmartScreen and Android Play Protect warn on install. A signing certificate (about $100-300 a year for Windows) or a Play Store release removes this.
* Anyone who can fully control their own device (uninstall the app, force-stop it, boot safe mode) can end the lock. The lock stops casual app-hopping, not a determined owner.
* The Android bridge is visible to the YouTube player frame. Only the single approved embed can load, but this is a residual risk.
* Registration says "this email already has an account". That is convenient but lets someone test whether an email is registered.
* Ten wrong passwords lock an account for 10 minutes, so someone could annoy a user by guessing on purpose.
* Debug-signed APK: for a public release, sign the APK with your own key (keep the key file private and backed up).

## In-app updates (v1.9.0)
* Updates are read from your own GitHub Release and downloaded only from `github.com` over HTTPS. The Windows installer and the APK are checked against GitHub's SHA-256 checksum when it is present, and the Windows file must be a real installer (starts with "MZ").
* Android only installs an update that is signed with the same key as the installed app. The signing key (`android/app/futureself-signing.p12`) is in the repository so that GitHub builds always use the same key. Because the repository is public, anyone could sign an app with that key, so only install FutureSelf from your own release page. For a Play Store release, create a private key and keep it out of the repository.
