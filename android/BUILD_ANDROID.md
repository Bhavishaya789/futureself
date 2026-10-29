# Building the FutureSelf Android app

Status: **written but not compiled or tested on a phone yet.** The environment this was written in could not download the Android SDK, so the first real build may show small compile errors that need fixing. Send me the error text and I will fix it.

## Easiest: Android Studio (Windows)
1. Install Android Studio (free). It brings its own SDK and Java.
2. (Optional) The screens are already built into `android/app/src/main/assets/www`. Only if you change the app screens: install Node.js 20, then `cd mobile`, `npm install`, `node build.js`.
3. In Android Studio: File > Open > choose the `android` folder. Wait for Gradle sync.
4. Build > Build APK(s). The file is `android/app/build/outputs/apk/debug/app-debug.apk`.
5. Copy the APK into the website's `downloads` folder as `FutureSelf.apk`.

## Without Android Studio: GitHub
Upload the whole project to a GitHub repo, open Actions > "Build Android APK" > Run workflow. Download the APK from the run's artifacts.

## First start on the phone
Allow "install unknown apps" for the browser/file manager. Open FutureSelf > Phone & lock and tick the steps: Accessibility (app lock), Display over other apps, Phone calls, Notifications, Battery. Add up to 5 emergency numbers. To link a PC: PC app Settings > Phone link > turn on, New code; on the phone press Find my PC and enter the code.
