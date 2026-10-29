# FutureSelf accounts: database, email and Google (one-time setup)

Everything below goes into **Vercel > your project > Settings > Environment Variables**. Add each one for all environments (Production, Preview, Development), then **Deployments > the latest one > Redeploy**.

| Name | Value |
|---|---|
| `MONGODB_URI` | the MongoDB connection string (Step 1) |
| `JWT_SECRET` | a long random text (Step 2) |
| `SMTP_USER` | your Gmail address that will send the codes (Step 3) |
| `SMTP_PASS` | the 16 letter Gmail App Password (Step 3) |
| `GOOGLE_CLIENT_ID` | from Google Cloud (Step 4) |

## Step 1: MongoDB Atlas (you are on the Connect screen already)
1. **Database Access** (left menu) > your user `bhavishyafuture042_db_user` > Edit. Role: **Read and write to any database**. Set a password made only of letters and numbers (no @ : / ? # symbols) and keep it safe.
2. **Network Access** > Add IP Address > **Allow access from anywhere** (`0.0.0.0/0`) > Confirm. Vercel has no fixed address, so this is needed.
3. Back on Connect: choose **Drivers**, Language **JavaScript / Node.js**, copy the string. It looks like
   `mongodb+srv://bhavishyafuture042_db_user:<db_password>@eco.g6yfj4i.mongodb.net/`
4. Make it ready: replace `<db_password>` with your real password, and add the database name `futureself` after the `/`:
   `mongodb+srv://bhavishyafuture042_db_user:YOURPASSWORD@eco.g6yfj4i.mongodb.net/futureself?retryWrites=true&w=majority`
5. This whole line is the value of `MONGODB_URI` in Vercel. Never put it in GitHub, in the apps, or in a chat.
6. You do NOT create tables by hand. The database and its collections (`users`, `sessions`, `tickets`) appear by themselves at the first sign-up.

## Step 2: JWT_SECRET
Any random text of 32+ characters. To make one, run `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` and copy the result.

## Step 3: Email codes (Gmail)
1. Use a Gmail account for FutureSelf. Turn on **2-Step Verification** (Google Account > Security).
2. Google Account > Security > 2-Step Verification > **App passwords** > name it `FutureSelf` > copy the 16 letters (no spaces).
3. `SMTP_USER` = that Gmail address, `SMTP_PASS` = the 16 letters. Gmail allows about 500 emails a day.

## Step 4: Continue with Google
1. console.cloud.google.com > create a project `FutureSelf`.
2. **APIs & Services > OAuth consent screen**: User type External, app name FutureSelf, your email as support/developer email. Save. Then press **Publish app** so any student (not only test users) can sign in. Basic sign-in (email, name) needs no Google review.
3. **Credentials > Create credentials > OAuth client ID** > type **Web application**.
   - Authorized JavaScript origins: `https://YOUR-SITE.vercel.app` (and your own domain if you add one). Nothing is needed under redirect URIs.
4. Copy the **Client ID** (ends with `.apps.googleusercontent.com`) into `GOOGLE_CLIENT_ID`.

## Step 5: Check it
Open `https://YOUR-SITE.vercel.app/api/config`. You should see `{"googleClientId":"...","app":"FutureSelf","v":1}`.
Then open the PC or phone app > Account > **Server address** > paste `https://YOUR-SITE.vercel.app` > Save > create an account. The code arrives by email.
If you tell me the address I can build it into the apps so students never type it.

## How the link works
Sign in with the same email on the PC and the phone. When a Focus or Strict session starts on the PC, the PC tells the server; the phone asks the server every few seconds and locks itself for the same time. Gentle sessions do not lock the phone. If the PC dies, the phone unlocks at the time the session was due to end (plus 2 minutes).
