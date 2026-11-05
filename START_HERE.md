# Start EduBridge in VS Code

## 1. Install Node.js
Install Node.js 18 or newer from [nodejs.org](https://nodejs.org/). Restart VS Code after installing it.

## 2. Open the folder
Extract `EduBridge-Complete-Updated.zip`. In VS Code choose **File → Open Folder…** and select the extracted `edubridge` folder.

## 3. Open a terminal
Choose **Terminal → New Terminal**. Check that the terminal is in the folder containing `package.json`.

## 4. Install the app's packages
Run:

```bash
npm install
```

## 5. Set a private session key
Copy `.env.example` to a new file named `.env`. Replace `SESSION_SECRET` with a long random value. Keep `.env` private and never upload it.

On macOS or Linux, you can make a random value with `openssl rand -hex 32`. On Windows, use a password manager to generate a long random string.

## 6. Start EduBridge
Run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). Keep the terminal open while you use the app. Press **Ctrl+C** in that terminal to stop it.

For automatic restart while editing, use `npm run dev` instead.

## 7. Create accounts
Use **Create account** to make a student, teacher or mentor account. Teachers can join the doubt and resource community. A mentor must create a mentor account and add subjects in their profile. Students can request a session from a mentor; private chat becomes available only after the mentor accepts it.

## 8. Run the included access-control checks
In another terminal, run:

```bash
npm test
```

## Where your local data is kept
EduBridge creates JSON files in `data/` and stores uploaded files in `uploads/`. Back up these folders if you need to keep local data. These files are for a single-computer prototype and are not a shared campus server.

## Important
Do not publish this local prototype for real student records without moving it to a secure hosted database, adding account recovery and moderation, reviewing uploads, and arranging HTTPS, backups and privacy procedures. Private chats are checked by the server, but the prototype has no email/push notifications, end-to-end encryption or private file attachments. It does not create teacher/admin accounts or claim that external certificates guarantee employment. The learning hub links to official providers; materials, video results, prices and certificate rules are controlled by those providers and can change.
