# Portfolio

Personal portfolio website showcasing projects, experience, skills, and achievements.

## Overview

This repository contains a responsive, accessible, and performance-focused portfolio built with TypeScript and modern web tooling. It includes sections for a hero, projects, experience, skills, achievements, and contact information. The site is structured for easy content updates and static deployment.

## Key Features

- Clean, responsive UI with accessible components
- Sectioned pages for Projects, Experience, Skills, Achievements, Contact
- Easy content updates via the `public/` asset folders
- Fast local development with HMR and production build optimizations

## Tech Stack

- TypeScript
- React / TSX components
- Vite (dev server and build)
- CSS (utility or plain CSS in `src/styles.css`)

## Project Structure

- `src/` — application source code and React/TSX components
  - `components/` — UI components and section components
  - `routes/` — page entry files
  - `lib/` — utilities and helpers
- `public/` — static assets (projects, certificates, achievements, images)
- `package.json`, `vite.config.ts`, `tsconfig.json` — build and tooling config

## Getting Started

Prerequisites: Node 16+ (Node 18 recommended) and npm or pnpm.

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

If your project uses `pnpm` or `yarn`, replace `npm` with the manager of your choice.

