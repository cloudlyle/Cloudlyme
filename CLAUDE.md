# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `my-web/` (the inner project directory):

```bash
yarn dev        # start dev server with HMR
yarn build      # production build to dist/
yarn preview    # preview the production build locally
yarn lint       # run ESLint
```

There is no test runner configured.

## Architecture

React 19 single-page app bundled with Vite 8. There is currently one component (`src/App.jsx`) and one global stylesheet (`src/App.css`). Entry point is `src/main.jsx` → `App`.

- **JavaScript** (not TypeScript) with JSX
- ESLint enforces `react-hooks` and `react-refresh` rules
- Static assets served from `public/` (SVG icon sprite at `public/icons.svg`)
- `@vitejs/plugin-react` uses Oxc for transforms
