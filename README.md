# 🛍️ Appscrip-task-pallabroy

A modern, responsive e-commerce storefront built with **Next.js 15**, **TypeScript**, and **CSS Modules**. Designed to be performant, SEO-friendly, and scalable, this project uses the [Fake Store API](https://fakestoreapi.com/) for mock product data.

> This project was bootstrapped with `create-next-app`.

## 🚀 Key Features

- **Responsive Design** – Mobile-first layout for seamless experience across all screen sizes.
- **Server-Side Rendering (SSR)** – Utilizes Next.js App Router for improved SEO and faster initial load.
- **TypeScript** – Strong typing for better scalability and developer experience.
- **CSS Modules** – Scoped, modular styling to avoid class name conflicts.
- **SEO Optimization** – Dynamic metadata with Next.js metadata API.

## 🛠️ Tech Stack

| Tool          | Description                                 |
| ------------- | ------------------------------------------- |
| **Framework** | Next.js 15+ (App Router)                    |
| **Language**  | TypeScript                                  |
| **Styling**   | CSS Modules                                 |
| **Linting**   | ESLint                                      |
| **API**       | [Fake Store API](https://fakestoreapi.com/) |

## 🧑‍💻 Getting Started

Follow these steps to run the project locally.

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) `v24.2.0` or later
- npm (comes with Node.js)

### 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/PallabRoy-SE/Appscrip-task-pallabroy.git
```

2. **Navigate to the project directory**

```bash
cd Appscrip-task-pallabroy
```

3. **Install dependencies**

```bash
npm install
```

### ▶️ Running the Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

You should now see the homepage of the e-commerce store. Any code changes will auto-refresh the browser.

## 📁 Project Structure

```
Appscrip-task-pallabroy/
├── src/
│   └── app/
│       ├── globals.css      # Global styles and CSS variables
│       ├── layout.tsx       # Root layout component
│       └── page.tsx         # Homepage component
├── eslint.config.mjs        # ESLint config
├── next.config.ts           # Next.js config
├── package.json             # Project metadata and dependencies
└── tsconfig.json            # TypeScript config
```
