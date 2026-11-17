[README.md](https://github.com/user-attachments/files/34964330/README.md)
<div align="center">

# FutureSelf

**Study one topic at a time, without distractions.**

A study app for **Windows** and **Android** that helps students set goals, follow a timetable,
learn topic by topic, and stay focused with a focus lock that works across both devices.

![Version](https://img.shields.io/badge/version-1.39.0-6a5be0)
![Windows](https://img.shields.io/badge/Windows-Electron-2de2e6)
![Android](https://img.shields.io/badge/Android-8.0%2B-3ddc84)
![Database](https://img.shields.io/badge/database-MongoDB-47a248)

[Download](https://futureself-website-e984.vercel.app) · [Releases](../../releases) · [Report a bug](../../issues/new)

</div>

---

## About

Students lose hours to notifications, reels and "just one more video". FutureSelf removes those distractions.
Students choose what they are preparing for, plan when to study, and start a focus session.
During the session the app locks other apps on the phone and the computer, and shows only the lesson for the current topic.

## Features

### Learning
- **Topic-by-topic lessons** with pictures, 3D visuals, formula sheets, Q&A and quizzes
- **Wide syllabus coverage:** Class 9–12, JEE Main and Advanced, NEET, B.Tech Semesters 1–8 and electives, CA (Foundation, Intermediate, Final), NDA, government exams and general knowledge
- **Previous-year questions (PYQs)** labelled with exam and year
- **In-session videos** chosen by the app and limited to the current topic, so there is no searching and no drifting away
- **Hindi and English** content, with a built-in dictionary

### Focus and planning
- **Focus lock** with Gentle, Focus and Strict modes
- **Cross-device lock:** a session started on the PC locks the phone too, and the reverse
- **Emergency contacts:** up to five numbers can still call and be called during a session
- **Timetable** by subject, day and minutes, with reminders on the phone
- **Progress tracking:** streaks, scores and weak topics

### Practice and coding
- **Challenge a friend:** the same questions, a timer, one attempt, and a speed bonus
- **Coding platform** inside the Windows app: editor, terminal and coding challenges
- **SQL Lab:** a real SQLite engine (WebAssembly) that understands common MySQL syntax and works offline

### Guidance
- **Bhavi, the 3D student guide**, who welcomes users by name and explains the app
- **Voice guide** that reads every step aloud, including the phone permission set-up
- **Animated "how to" clips** for each Android permission, and an interactive guided tour

## Platforms

| Platform | Technology | Folder |
|---|---|---|
| Windows | Electron | [`app/`](app) |
| Android 8.0+ | Kotlin + WebView (min SDK 26, target SDK 34) | [`android/`](android) |
| Website and API | Static site + serverless API on Vercel | [`website/`](website) |
| Windows installer | Go | [`installer/`](installer) |

## Project structure

```
futureself/
├── app/                 Windows app (Electron)
│   ├── main.js          main process
│   ├── core/            accounts, storage, content, phone link, app blocker, updates
│   └── renderer/        screens: HTML, CSS and JavaScript
├── android/             Android app (Kotlin + WebView)
├── mobile/              builds the web layer used by the Android app
├── website/             download website and API (Vercel)
├── installer/           Windows setup builder (Go)
├── Content/             study content by class, exam and semester
├── tools/               content and build scripts
├── .github/workflows/   automatic Android builds and content seeding
├── dotenv.template      configuration template
├── DEPLOY.md            hosting and release guide
└── SECURITY.md          security notes
```

## Getting started

### Requirements
- [Node.js](https://nodejs.org) 20 or later
- [Git](https://git-scm.com)
- Optional: a [MongoDB Atlas](https://www.mongodb.com/atlas) database. Without one, the app saves data in a local file.
- Optional, for Android: [Android Studio](https://developer.android.com/studio)

### Run the Windows app
```bash
git clone https://github.com/Bhavishaya789/futureself.git
cd futureself
npm install
cp dotenv.template .env      # on Windows PowerShell: copy dotenv.template .env
npx electron app
```

### Configuration
All settings are in `.env`. See [`dotenv.template`](dotenv.template) for the full list with explanations.

| Variable | Purpose |
|---|---|
| `SECRET_KEY` | Long random text used to sign logins (**required** for real use) |
| `STORAGE` | `auto`, `mongo` or `file` |
| `MONGO_URI`, `MONGO_DB` | MongoDB connection |
| `NTFY_SERVER`, `TELEGRAM_BOT_TOKEN` | Phone reminders |
| `PISTON_URL`, `GEMINI_API_KEY` | Coding platform (see [`website/CODE-SETUP.md`](website/CODE-SETUP.md)) |

> **Never commit your `.env` file.** It contains private keys and passwords.

### Build the Android app
- **Android Studio:** open the `android` folder, wait for Gradle to sync, then choose **Build > Build APK(s)**.
- **GitHub Actions:** open **Actions > Build Android APK > Run workflow**. Enter a release tag to attach the APK to that release.

If you change the app screens, rebuild the Android web layer first:
```bash
cd mobile
npm install
node build.js
```

More details are in [`android/BUILD_ANDROID.md`](android/BUILD_ANDROID.md).

### Deploy the website
The `website` folder is deployed on Vercel. For setup and accounts, see [`DEPLOY.md`](DEPLOY.md) and [`website/SETUP_ACCOUNTS.md`](website/SETUP_ACCOUNTS.md).

## Download

The latest Windows installer and Android APK are on the [Releases](../../releases) page and the [FutureSelf website](https://futureself-website-e984.vercel.app).

> Windows may show "Windows protected your PC" because the installer is not code-signed yet. Click **More info > Run anyway**.
> On Android, allow "Install unknown apps" for your browser or file manager.

## Phone set-up

On first launch, Bhavi walks you through each permission the focus lock needs:

1. **Notifications:** study reminders and the "phone locked" notice
2. **Phone calls:** one-tap calls to emergency contacts
3. **Display over other apps:** shows the study screen on top of other apps
4. **Accessibility (app lock):** notices when another app is opened during a session
5. **Battery:** keeps the lock working with the screen off

FutureSelf only checks which app is open. It does not read what is on the screen.

## Security

Passwords are stored as salted hashes, sign-in tokens are encrypted on every device, and all traffic uses HTTPS.
See [`SECURITY.md`](SECURITY.md) for details. To report a vulnerability, please contact the maintainer privately instead of opening a public issue.

## Contributing

Bug reports and suggestions are welcome.

1. Open an [issue](../../issues) describing the bug or idea.
2. Create a branch: `git checkout -b fix/short-description`
3. Commit with a clear message and open a pull request that links the issue (`Fixes #12`).

## Author

**Bhavishya Kumar** · B.Tech CSE student and full-stack developer
GitHub: [@Bhavishaya789](https://github.com/Bhavishaya789)

## License

All rights reserved. This project is not open source at this time.
