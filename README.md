# Cloudlyme — Deployment Guide

## Table of Contents

1. [Architecture overview](#1-architecture-overview)
2. [Prerequisites](#2-prerequisites)
3. [Local development](#3-local-development)
4. [Environment variables](#4-environment-variables)
5. [Deploy apps/web (portfolio)](#5-deploy-appsweb-portfolio)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Architecture overview

```
cloudlyme/ (pnpm monorepo)
│
├── apps/web/       React 19 + Vite — portfolio site
│                   Deploys to: Vercel  →  https://cloudlyme.vercel.app
│                   Also:       GitHub Pages  →  https://cloudlyle.github.io/Cloudlyme
│
├── apps/inbox/     React 19 + Vite — inbox app (placeholder)
│
└── packages/
    ├── ui/         @cloudlyme/ui     — shared components
    ├── tokens/     @cloudlyme/tokens — design tokens
    ├── types/      @cloudlyme/types  — shared TypeScript types
    └── hooks/      @cloudlyme/hooks  — shared React hooks
```

---

## 2. Prerequisites

| Tool       | Minimum version | Install                 |
| ---------- | --------------- | ----------------------- |
| Node.js    | 18+             | https://nodejs.org      |
| pnpm       | 8+              | `npm install -g pnpm`   |
| Vercel CLI | latest          | `npm install -g vercel` |
| Git        | any             | https://git-scm.com     |

---

## 3. Local development

### First-time setup

```bash
# 1. Clone the repo
git clone https://github.com/cloudlyle/Cloudlyme.git
cd Cloudlyme

# 2. Install all workspace dependencies
pnpm install
```

### Running the app

```bash
# Portfolio site (port 5173 or next available)
pnpm dev

# Production preview
pnpm --filter web preview
```

### Building

```bash
pnpm build              # build apps/web
pnpm --recursive build  # build everything
```

---

## 4. Environment variables

Vite only exposes variables prefixed with `VITE_`. Create these files as needed (all are gitignored via `.env*`):

```bash
apps/web/.env.local        # local overrides
apps/web/.env.production   # picked up automatically on production build
```

| Variable       | Required | Description                                                                |
| -------------- | -------- | -------------------------------------------------------------------------- |
| `VITE_API_URL` | No       | Base URL of the backend API. Defaults to `http://localhost:3001` if unset. |

---

## 5. Deploy apps/web (portfolio)
Vercel: https://cloudlyme.vercel.app/
Github: https://cloudlyle.github.io/Cloudlyme/
### Option A — Vercel (primary, automatic)

The root `vercel.json` is already configured:

```json
{
  "buildCommand": "pnpm --filter web build",
  "outputDirectory": "apps/web/dist",
  "installCommand": "pnpm install",
  "framework": "vite"
}
```

**First deploy:**

```bash
vercel   # from repo root, follow prompts
```

**Subsequent deploys:** push to `main` — Vercel auto-deploys.

> **Important:** In the Vercel dashboard make sure **Settings → Git → Production Branch** is set to `main`, not `gh-pages`.

### Option B — GitHub Pages (manual)

```bash
# From repo root
pnpm --filter web deploy
```

This runs `gh-pages -d dist` inside `apps/web`, pushing the built output to the `gh-pages` branch.

> **Note:** GitHub Pages uses `/Cloudlyme/` as the base path. Vercel uses `/`.
> `vite.config.ts` handles this automatically via `process.env.VERCEL`.

---

## 6. Troubleshooting

### Vercel builds from wrong branch (`gh-pages`)

> **Settings → Git → Production Branch** → change to `main`

### "vite: command not found" on Vercel

> Vercel detected npm instead of pnpm. Confirm that `pnpm-workspace.yaml` exists at the repo root and that the Vercel project root directory is set to `/` (not `apps/web`).

### Package Manager changed from "pnpm" to "npm" warning

> Same root cause as above — Vercel is deploying a branch that lacks `pnpm-workspace.yaml`. Switch the production branch to `main`.

### White screen / 404 on page refresh (Vercel)

> The SPA rewrite rule in `vercel.json` handles this. If it happens, confirm the `rewrites` block is present in the root `vercel.json`.

### White screen / 404 on page refresh (GitHub Pages)

> The `public/404.html` redirect script handles this for GitHub Pages. Confirm it exists in `apps/web/public/404.html`.
