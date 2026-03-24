# 🤖 AI Chatbot (Next.js + Groq)

A modern AI chatbot built with **Next.js**, **shadcn/ui**, and **Groq API**.
It provides fast, structured, and interactive responses similar to ChatGPT.

---

## 🚀 Features

* ⚡ Fast AI responses using **Groq API**
* 💬 ChatGPT-like UI (chat bubbles + auto scroll)
* 🧠 Smart structured answers (headings, bullets)
* 📝 Markdown rendering (with tables & formatting)
* 🎨 Clean UI with **shadcn/ui + Tailwind CSS**
* 🔄 Loading state + smooth UX
* 📱 Responsive design

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Axios**
* **react-markdown + remark-gfm**
* **Groq API (LLM)**

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/ai-chatbot.git
cd ai-chatbot
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Add environment variables

Create a `.env.local` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

---

### 4️⃣ Run the app

```bash
npm run dev
```

Visit 👉 http://localhost:3000

---

## 🧠 How it works

1. User sends a message from the UI
2. Request goes to `/api/chat`
3. Backend calls **Groq API**
4. AI response is returned and rendered with Markdown

---

## 📂 Project Structure

```bash
src/
 ├── app/
 │   ├── api/chat/route.ts   # API route (Groq integration)
 │   └── page.tsx            # Chat UI
 ├── components/ui/          # shadcn components
```

---

## 🔑 API Configuration

The chatbot uses:

```ts
model: "openai/gpt-oss-120b"
```

You can switch models like:

* `llama-3.1-8b-instant` (faster)
* `openai/gpt-oss-120b` (smarter)

---

## ✨ Future Improvements

* 🔄 Streaming responses (real-time typing)
* 💾 Chat history (database)
* 🔐 Authentication (Clerk/Auth.js)
* 🌙 Dark mode toggle
* 📂 Sidebar like ChatGPT
* 📊 Usage tracking

---

## 🙌 Acknowledgements

* Groq API
* shadcn/ui
* Next.js

---

## 📜 License

MIT License
