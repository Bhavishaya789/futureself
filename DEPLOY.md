# FutureSelf 1.1.0: putting it online (accounts need website/SETUP_ACCOUNTS.md too)

You end up with three files and one website:
- `FutureSelf-Setup.exe` (Windows installer, 124 MB)
- `FutureSelf.apk` (Android app, you build it once: see `android/BUILD_ANDROID.md`)
- the `website` folder (a normal static site: index.html + assets)

## Where to host the big files
GitHub will not accept files over 100 MB in a normal repo, so do this:
1. Make a GitHub repo, upload the source (this folder without the .exe).
2. Releases > Draft a new release > tag `v1.0.0` > attach `FutureSelf-Setup.exe` and `FutureSelf.apk` > Publish.
3. Copy `website/downloads.json.example` to `website/downloads.json` and put your real release links in it.
4. Host the `website` folder: GitHub Pages (Settings > Pages), Netlify or Cloudflare Pages (drag the folder). 

The page then shows the right button for each visitor: Windows gets the Setup, Android gets the APK.
If you host both files yourself instead, put them in `website/downloads/` as `FutureSelf-Setup.exe` and `FutureSelf.apk` and skip downloads.json.

## Rebuilding the Windows Setup
Needs Go 1.22+ (works on Windows, Linux or Mac): `installer/build.sh <packaged FutureSelf folder> 1.0.0 FutureSelf-Setup.exe`.
It packs the folder, builds the small uninstaller and embeds both in the Setup.
Windows shows "protected your PC" until the Setup is code-signed (a paid certificate). Click More info > Run anyway.

## Rebuilding the Android web layer
`cd mobile && npm install && node build.js` (copies the screens into `android/app/src/main/assets/www`). The built copy is already included, so Android Studio works without Node.
