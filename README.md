🩺 Med-Simplifier – AI-Powered Medical Jargon to Simple Language

Med-Simplifier is an AI-powered web app that helps patients and caregivers understand complex medical documents, prescriptions, and health reports by converting them into simple, plain language without losing important details.

💡 The goal is to bridge the communication gap between healthcare professionals and everyday people, so they can make informed decisions about their health.

---

## 🚀 Features

* 📝 Medical Jargon Simplification – Converts complex medical terms into everyday words.
* 🌐 Multi-Language Support – Can translate explanations into multiple languages for better accessibility.
* 📄 Document Upload – Upload PDFs, DOCX, or text files containing medical reports.
* 🎯 Highlight & Explain – Highlights technical terms and explains them individually.
* 🖌 Clean, Calm UI – Pastel gradient design with pink, magenta, cream, and white tones.
* 🔒 Privacy First – No data is stored; everything is processed in real-time.

---

## 🛠 Tech Stack

**Frontend**

* React (UI framework)
* TailwindCSS (Styling)
* Axios (API requests)

**Backend**

* Node.js + Express
* OpenAI API (for AI text simplification)
* Multer (for file uploads)
* dotenv (for environment variables)

---

## 📦 Installation & Setup

### 1. Clone the repository

git clone [https://github.com/your-username/med-simplifier.git](https://github.com/your-username/med-simplifier.git)
cd med-simplifier

### 2. Install dependencies

Frontend:
cd client
npm install

Backend:
cd server
npm install

### 3. Set up environment variables

Create a `.env` file in the `server` folder:
OPENAI\_API\_KEY=your\_openai\_api\_key\_here
PORT=4000

💡 Get your OpenAI API key from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

---

## ▶ Running the Project

Start Backend:
cd server
npm start

Start Frontend:
cd client
npm start

---

## 📂 Project Structure

med-simplifier/
│
├── client/                # React frontend
│   ├── public/            # Static files
│   ├── src/               # Components, pages, styles
│   └── package.json
│
├── server/                # Express backend
│   ├── routes/            # API routes
│   ├── controllers/       # Logic for requests
│   ├── utils/             # Helper functions
│   ├── .env.example       # Example env variables
│   └── package.json
│
└── README.md              # Documentation

---

## 🎯 How It Works

1. User uploads a medical report or pastes text.
2. The backend sends the text to OpenAI’s API.
3. The AI rewrites the text in simple, layman-friendly terms.
4. The result is displayed in a clean, readable format.

---

## 🖼 UI Preview

(Add screenshots or GIFs here once your app is running.)

---

## 📜 License

This project is licensed under the MIT License – feel free to modify and use it.

---

## ❤️ Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## ✨ Acknowledgements

* OpenAI – for the GPT API
* TailwindCSS – for the styling framework
* Express.js – for backend server


Do you want me to now make you a **no-API version of Med-Simplifier** so it works even without OpenAI? That could be useful if you’re just demoing it.
