[SECURITY.md](https://github.com/user-attachments/files/34964738/SECURITY.md)
# Security Policy

FutureSelf takes the safety of students' accounts, study data and devices seriously.
This page explains which versions are supported, how to report a problem, how the apps are protected, and the known limits.

**Current version:** 1.39.0 · **Last reviewed:** November 2026

---

## Supported versions

| Version | Supported |
|:--|:--:|
| 1.39.x (latest) | ✅ |
| 1.38.x | ⚠️ Please update. Security fixes are only made in the latest version |
| 1.37 and older | ❌ |

The Windows and Android apps check for updates automatically. Please always install the latest release.

## Reporting a vulnerability

**Please do not open a public issue for security problems.**

Report it privately instead:
1. Open the repository's **Security** tab and click **Report a vulnerability**, or
2. Contact the maintainer, [@Bhavishaya789](https://github.com/Bhavishaya789), directly.

Please include:
- what you found and where (app, website or API),
- the steps to reproduce it,
- what an attacker could do with it.

You will receive a reply within **7 days**. Once the problem is confirmed, a fix is released as soon as possible, and you will be credited if you wish.

---

## How FutureSelf is protected

### Accounts and sign-in
- Passwords are stored as **salted scrypt hashes**, never as plain text.
- Sign-in tokens are **HMAC-signed**, expire after **90 days**, and can all be cancelled at once with **"Sign out everywhere"**.
- Tokens are **encrypted on every device**: with the Android Keystore on the phone, and with the Windows account (DPAPI via Electron `safeStorage`) on the PC.
- Email codes are hashed, expire, and lock after **5 wrong tries**.
- Google sign-in tokens are checked for audience, issuer, expiry and a verified email.
- Browser sign-in uses a **one-time ticket** that only the app that started it can redeem.
- Password guessing is limited to **40 tries per 10 minutes per network**, plus a per-account lock after 10 wrong passwords.
- Unknown and known emails take the same time to check, so timing does not reveal which emails exist.

### Server and website (Vercel)
- **No open CORS:** only FutureSelf's own pages and apps can call the API.
- **Rate limits** on every sensitive endpoint: sign-in, sessions, video search, answer checking, avatars, sync and the admin key (10 tries per 10 minutes).
- **Security headers:** HTTPS only (HSTS), no framing, a strict content policy, no referrer and no MIME sniffing.
- Only real API handlers are reachable. Names like `constructor` cannot reach inherited properties.
- A focus session can lock the other device for **12 hours at most**.

### Cloud sync
- Each student can only read and change **their own data**. The owner always comes from the verified sign-in token, never from the request.
- Synced data is stored as an opaque string, and area names and revisions are validated, which blocks database operator injection (`$where`, `$ne` and similar).
- Every write carries a revision. Conflicting writes from two devices are merged safely instead of being lost.
- Size limits per area, and 90 requests per minute per network.
- On the device, every synced field is validated again before it is saved. `__proto__`-style keys are ignored.
- Students can remove everything with **"Delete my cloud data"**.

### Windows app
- Renderer **sandbox** and **context isolation** are on, and Node.js is not available to app pages.
- Strict content policy (no inline scripts), and navigation to outside pages is blocked.
- Web permission requests (camera, location and similar) are denied, except full-screen video.
- Sign-in addresses must be HTTPS, or `127.0.0.1` / `localhost` with a port.

### Android app
- **HTTPS only:** plain HTTP is switched off.
- The app's WebView loads only pages packaged inside the APK and blocks file access.
- App backup is disabled, so account data cannot be copied out through Android backup.
- Background services are protected by Android system permissions.
- The focus lock (Accessibility service) only checks **which app is open**. It never reads what is on the screen.

### Updates
- Updates are read from FutureSelf's own GitHub Releases and downloaded **only from `github.com` over HTTPS**.
- Installers are checked against GitHub's **SHA-256 checksum** when one is available, and the Windows file must be a real installer.
- Android only installs an update that is **signed with the same key** as the installed app.

### Videos and content
- In a study session, only the **single video the app chose** can play. Users cannot search or browse other videos.

### Dependencies
- `npm audit` reports **0 known problems** for the server and the app as of the last full review (v1.38.0).

---

## Review for v1.39.0 (guided tour, Bhavi the 3D guide and voice guide)

| Area | What was checked | Result |
|:--|:--|:--|
| Onboarding answers | Where the answers to Bhavi's first-run questions (goal, study time, distractions, language) are stored | Kept **only on the device** in local storage. They are not sent to the server |
| Voice guide (Windows) | Text-to-speech | Uses the computer's built-in speech engine. Nothing is sent online |
| Voice guide (Android) | New `speak` and `hush` functions in the Android bridge | Use the phone's own text-to-speech. They only read text aloud, and cannot read data or change settings |
| 3D guide and tour | New scripts in the app | Run inside the existing sandbox and content policy, and load no outside code |
| Permission "how to" clips | Animated demos of Android settings | Animations only. They do not change any setting, and the user always grants permissions in Android's own screens |

---

## Known limitations

These cannot be solved by code alone:

- **Not code-signed yet.** Windows SmartScreen and Android Play Protect may warn during installation. A Windows signing certificate or a Play Store release would remove these warnings.
- **Android signing key.** The key used to sign APKs (`android/app/futureself-signing.p12`) is stored in the repository, so that GitHub builds always use the same key. Anyone with access to the repository could sign an app with it. Only install FutureSelf from the official release page. A separate private key is planned for the Play Store release.
- **A determined device owner can end a focus lock** by uninstalling the app, force-stopping it or booting into safe mode. The lock stops casual app-hopping, not a determined owner.
- **The Android bridge is visible to the YouTube player frame.** Only the single approved video can load, but this remains a small residual risk.
- **Registration says "this email already has an account".** This is convenient, but it lets someone test whether an email is registered.
- **Account lock-out can be abused.** Ten wrong passwords lock an account for 10 minutes, so someone could guess on purpose to annoy a user.

---

## Security history

| Version | Main security changes |
|:--|:--|
| **1.39.0** | Review of the guided tour, Bhavi and the voice guide (see above) |
| **1.38.0** | Cloud sync with per-student isolation, injection protection, revision checks and size limits; rate limits on more endpoints; admin key limit; "Delete my cloud data" |
| **1.9.0** | Secure in-app updates from GitHub Releases with checksum and signature checks |
| **1.4.0** | CORS closed; sign-in rate limits; equal-time email checks; "Sign out everywhere"; 12-hour lock cap; security headers; encrypted tokens on Android and Windows; HTTPS only on Android; Windows permission blocking |
