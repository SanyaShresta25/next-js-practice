
# 🧪 My Next.js + shadcn/ui Project

This project is built with **Next.js 15** and styled using **shadcn/ui**, a beautifully designed component library based on Radix UI and Tailwind CSS.

---

## 🚀 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Installation & Setup

Follow these steps to set up the project:

### 1. Create the Next.js App

```bash
cd Desktop
mkdir my-next15-app
cd my-next15-app
code .
npx create-next-app@latest .
```

> Choose the following during setup:
> - TypeScript: ✅ Yes
> - App Router: ✅ Yes
> - Tailwind CSS: ✅ Yes
> - ESLint: ✅ Yes
> - src directory: ✅ Yes

---

### 2. Install shadcn/ui

```bash
npx shadcn init
```

Follow the CLI to configure:
- Choose your style (e.g., `default`)
- Select Tailwind config path (`tailwind.config.js`)
- Choose the directory for components (usually `components/ui`)

---

### 3. Add Components

You can now add ready-to-use UI components:

```bash
npx shadcn add button
npx shadcn add input
npx shadcn add card
npx shadcn add badge
npx shadcn add separator
npx shadcn add dialog
npx shadcn add tooltip
npx shadcn add carousel
```

---

### 4. Run the Dev Server

```bash
npm run dev
```

Your app should be running at [http://localhost:3000](http://localhost:3000)

---

## 🧩 Folder Structure

```
my-next15-app/
├─ app/              # Next.js App Router pages
├─ components/       # Your reusable components
│  └─ ui/            # shadcn/ui components
├─ public/           # Static assets
├─ styles/           # Global CSS (if any)
├─ tailwind.config.js
├─ tsconfig.json
└─ README.md
```

---

## 💡 Tips

- You can browse and preview components at [ui.shadcn.com](https://ui.shadcn.com/docs/components).
- Customize your `tailwind.config.js` if needed.
- Each added component comes with Tailwind classes and Radix UI accessibility baked in.

---


