# 🌐 See2Sound — Frontend

Frontend web interface for **See2Sound**, an AI-powered system that transforms visual media into contextual audio descriptions.

This repository contains the official website for the project, responsible for presenting See2Sound, explaining its purpose, showing how the system works, and providing access to the application download page.

---

## 🎯 Purpose

The frontend provides an **accessible interface** where users can:

- Learn about the See2Sound project
- Understand how the system works
- Access information about accessibility features
- Navigate through an accessibility-friendly interface
- Download the See2Sound application

---

## 🧠 System Role

The frontend is responsible for:

- 🖥 Presenting the See2Sound project
- 📘 Explaining the system purpose and workflow
- 📥 Providing access to the app download page
- ♿ Offering an accessible and responsive web experience
- 🔗 Connecting users to the complete See2Sound ecosystem

---

## ⚙️ System Flow

```text
User
↓
Frontend Website
↓
Project Information / Download Page
↓
See2Sound App
↓
Backend API
↓
AI Processing
↓
Audio Description Generation
```

---

## 🛠 Technologies

Main technologies used:

- ⚛️ React
- ⚡ Vite
- 🎨 CSS / Tailwind CSS
- 🧩 Component-based interface
- ♿ Accessibility standards

---

## 📦 Project Structure

```bash
See2Sound_Frontend/
├── app/
│   ├── public/             # favicon and static assets
│   ├── src/
│   │   ├── assets/         # project logo
│   │   ├── components/     # sections, navigation and decorative effects
│   │   ├── hooks/          # background effect preferences
│   │   ├── lib/            # settings validation and UI utilities
│   │   ├── pages/          # Home, Download and NotFound
│   │   └── styles/         # global and component CSS
│   ├── tests/             # settings regression tests
│   └── package.json       # application dependencies and scripts
├── package.json           # convenience scripts that delegate to app/
└── AUDITORIA_PRE_APRESENTACAO_WEB.md
```

## Run and validate

Use Node.js 20.19+ or 22.12+ (as required by Vite) and npm. From the repository root:

```sh
npm --prefix app ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

The production output is `app/dist`. Deploy these static files with an SPA fallback to `index.html` for `/download` and unknown application routes. Do not expose the development server as the production website. The current app assumes deployment at the domain root; subdirectory hosting requires coordinating Vite `base` and router `basename`.

The website currently presents the project and application availability. It has no API integration, upload, video player or downloadable application binaries. No environment variables or backend credentials are needed. The processing steps describe the broader See2Sound system, not a web upload flow.

See [the pre-presentation audit](AUDITORIA_PRE_APRESENTACAO_WEB.md) for evidence, limitations and the demonstration checklist.

---

## ♿ Accessibility

Accessibility is a key aspect of the project.  
The interface will be designed to support:

- Screen readers
- Keyboard navigation
- High contrast UI
- Semantic HTML structure
- Reduced visual effects when needed
- Clear visual hierarchy
- Accessible navigation components

---

## 🚧 Development Status

Frontend currently under development as part of the **See2Sound Project**.

---

## ❤️ Accessibility First
This project is built with a focus on **digital accessibility**, helping users understand and access the See2Sound ecosystem through a clear and inclusive interface.

---

## 🔗 Related Repositories

This project is part of the **See2Sound system**.

- 🧠 Backend (AI + API) → https://github.com/ClarAlvez/See2Sound_Backend
- 📱 Desktop/Mobile App → https://github.com/cc24136/See2Sound_App

---

## 👨‍💻 Authors

Developed as part of the **See2Sound Project**.

- 💫​ Clara Alves dos Santos — [GitHub](https://github.com/ClarAlvez)
- 🐶​​ João Victor Cussolim   — [GitHub](https://github.com/JoaoCussolim)
