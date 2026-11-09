# Putting FutureSelf on Google Play (and what to do about the App Store)

## Google Play: the efficient path
1. **Developer account** (one time, US$25). Use an *organisation* account if SpinDigital is a registered business (needs a D-U-N-S number, takes days). A *personal* account is faster but new personal accounts must run a **closed test with at least 12 testers for 14 days** before Production is allowed.
2. **Target API level.** Google requires new apps and updates to target the current Android API (36 from 31 Aug 2026). The app now targets 34. Before the first upload, change `compileSdk`/`targetSdk` to 36 in `android/app/build.gradle.kts`, build, and test on a real phone (edge-to-edge screens, exact alarms, foreground service rules). Tell me when you want this done and I will do it and re-test the web side.
3. **Upload key (one time).** Run on your PC (Java installed):
   `keytool -genkeypair -v -keystore upload.jks -alias upload -keyalg RSA -keysize 2048 -validity 10000`
   Keep `upload.jks` and the passwords somewhere safe. In GitHub, Settings > Secrets > Actions, add: `PLAY_KEYSTORE_B64` (output of `[Convert]::ToBase64String([IO.File]::ReadAllBytes("upload.jks"))`), `PLAY_KEYSTORE_PASSWORD`, `PLAY_KEY_ALIAS` (upload), `PLAY_KEY_PASSWORD`.
   Do not use the key in the repo (`futureself-signing.p12`): its password is public.
4. **Build the bundle.** GitHub > Actions > "Android Play Store bundle" > Run workflow. Download `FutureSelf-play-aab`. When creating the app in Play Console, accept **Play App Signing**.
5. **Store listing.** Name, short and full description, 512x512 icon, 1024x500 feature graphic, at least 2 phone screenshots, category Education, contact email, privacy policy URL: `https://<your-site>/privacy.html`.
6. **Forms.** Data safety (collected: email, name, app activity, crash logs; encrypted in transit; deletion on request), content rating questionnaire, target audience (13+ or 18+ is simplest), ads: none.
7. **Permission declarations.** Be ready to explain: exact alarms (study reminders), accessibility service (focus lock: say it only detects which app is open to keep the student focused), overlay. Accessibility is the most likely reason for a review delay; make a short screen recording showing the setting and the lock.
8. **Test then release.** Internal test first (you), then closed test (12 people for 14 days if personal account), then Production.

## Updates
Raise `versionCode` each upload (now 1370). The existing in-app APK updater is for sideloaded installs. Play installs update through Play, so the app should not offer the APK update to Play users (I can hide it when installed from Play if you want).

## Apple App Store
Needs a Mac (Xcode) and an Apple Developer account (US$99 a year); the Android app cannot be reused directly. The focus lock and accessibility features do not exist on iOS. Cheapest first step: publish the website as an installable web app (PWA), which also works on iPhone. A native iOS app is a separate project.

## Licences (schools)
Set `ADMIN_KEY` (16+ random characters) in Vercel > Settings > Environment Variables, redeploy, then mint codes:
`POST /api/plan` with JSON `{"op":"mint","key":"<ADMIN_KEY>","plan":"school","seats":30,"days":365,"label":"School name"}`. Codes look like `ABCD-EFGH-JKLM`; students redeem them in Study Hub > Parent link & plan. Online payment (Razorpay/Stripe) is not connected: it needs your merchant account and keys.
Crash summary: `POST /api/report` with `{"op":"summary","key":"<ADMIN_KEY>"}`.
