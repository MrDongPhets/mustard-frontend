# MUSTARD Digitals — Frontend

React + Vite frontend for [mustarddigitals.com](https://mustarddigitals.com). Fully static — no backend required for deployment.

## Tech Stack

- React 19
- Vite 7
- React Router v7
- AOS (scroll animations)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── api/          # API helpers (submitContact → Web3Forms)
├── assets/       # Images and static assets
├── components/   # Shared UI components
├── data/         # Static content (portfolio.js — update this with real projects)
├── pages/        # Route pages (Home, Portfolio, About, Services, Contact)
└── styles/       # CSS files
```

## Updating Content

All content is in `src/data/portfolio.js`. Edit that file and push — Vercel will redeploy automatically.

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import into [Vercel](https://vercel.com) — root directory is `/` (this folder)
3. Build command: `npm run build` / Output: `dist`
4. Add custom domain `mustarddigitals.com` in Vercel dashboard

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | PHP API base URL (future use when backend is connected) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
