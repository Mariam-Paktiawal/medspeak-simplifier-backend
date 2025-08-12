 🩺 Med-Simplifier

An AI-powered app that simplifies complex medical text into plain, easy-to-understand language.


## 🚀 Features

* AI-powered medical jargon simplification
* Multi-language support
* Upload and process medical documents
* Clean, gradient UI design
* Privacy-focused, no data stored

---

## 📂 Project Structure

```
med-simplifier/
│
├── client/               # React frontend
│   ├── public/
│   └── src/
│
├── server/               # Node.js backend
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── .env.example          # Example env variables
├── README.md
└── package.json
```

---

## 🔧 Prerequisites

* Node.js v18 or newer installed locally (optional if you run locally)
* Git installed locally (optional if you use GitHub web editor)
* GitHub account
* Railway account ([railway.app](https://railway.app))
* OpenAI API key ([Get yours here](https://platform.openai.com/account/api-keys))

---

## 1️⃣ Clone Repository (Optional if working locally)

If you want to work locally:

```bash
git clone https://github.com/yourusername/med-simplifier.git
cd med-simplifier
```

If you can’t run locally, skip to Step 3 for **Online GitHub editing & deployment**

---

## 2️⃣ Install Dependencies (Optional for local development)

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd ../client
npm install
```

---

## 3️⃣ Setup Environment Variables

### Locally:

Create a `.env` file inside the `server` folder with:

```
OPENAI_API_KEY=your_openai_api_key_here
PORT=4000
```

### On Railway:

* You will add these environment variables via the Railway dashboard later.

---

## 4️⃣ Running Locally (Optional)

### Start backend:

```bash
cd server
npm start
```

### Start frontend:

Open a **new terminal**

```bash
cd client
npm start
```

---

## 5️⃣ Create & Push Backend Code on GitHub (If you don’t have local setup)

* Go to your GitHub repository page
* Click **Add file → Create new file**
* Add all backend files (`index.js`, `package.json`, `.gitignore`, `.env.example`, `README.md`) **one by one** by copy-pasting code
* Commit each file with clear messages like:

  * “Add backend index.js”
  * “Add backend package.json”
  * “Add .env.example”

---

## 6️⃣ Deploy Backend on Railway

### Step-by-step:

1. Login to [https://railway.app](https://railway.app)
2. Click **New Project** → **Deploy from GitHub**
3. Connect your GitHub account if not connected
4. Select your `med-simplifier` repo
5. Wait for Railway to detect your Node.js backend and start building
6. In Railway dashboard, go to **Settings → Variables**
7. Add environment variables exactly as:

   ```
   OPENAI_API_KEY=your_actual_openai_api_key
   PORT=4000
   ```
8. Save and **redeploy** if needed
9. Copy your backend URL (something like `https://med-simplifier.up.railway.app`)

---

## 7️⃣ Update Frontend API URL

* Open your frontend project (CodeSandbox or GitHub repo)
* Find the place where the frontend calls the backend API (usually a constant or config file)
* Replace the URL from `http://localhost:4000` to your Railway backend URL, e.g.:

  ```js
  const API_BASE_URL = "https://med-simplifier.up.railway.app";
  ```
* Save changes and redeploy frontend (on CodeSandbox or your hosting platform)

---

## 8️⃣ Deploy Frontend

You can deploy frontend on:

* **Vercel** ([vercel.com](https://vercel.com)) — easiest with GitHub integration
* **Netlify** ([netlify.com](https://netlify.com))
* Or Railway (separate project)

**Make sure frontend fetches from your deployed backend URL!**

---

## 9️⃣ Test Your App

* Open your frontend URL in a browser
* Paste medical text or upload file
* Click “Simplify”
* The AI-powered simplified text should appear

---

## ⚠️ Common Errors & Fixes

| Error                           | Cause                            | Fix                                            |
| ------------------------------- | -------------------------------- | ---------------------------------------------- |
| Backend fails to start          | Missing dependencies or env vars | Run `npm install`, add `.env` with API key     |
| OpenAI API authentication error | Wrong/missing API key            | Verify API key is correct in Railway or `.env` |
| CORS errors on frontend         | Backend not allowing requests    | Make sure `cors()` middleware is enabled       |
| Frontend cannot reach backend   | Wrong API URL in frontend        | Update API URL to deployed Railway backend     |

---

## 🛠 Tech Stack

* Frontend: React, TailwindCSS, Axios
* Backend: Node.js, Express, OpenAI API
* Hosting: Railway (backend), Vercel/Netlify (frontend)


## 📜 License

MIT License

