# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173/gervisramos/
npm run build      # Production build into dist/
npm run preview    # Preview production build locally
npm run deploy     # Build and push to gh-pages branch (GitHub Pages)
```

There are no tests or linters configured.

## Architecture

Vite + React SPA deployed to GitHub Pages at `gervisram.github.io/gervisramos`.

**Routing:** `HashRouter` (required for GitHub Pages — no server-side routing). Routes are defined in `src/App.jsx`.

**Base path:** `vite.config.js` sets `base: '/gervisramos/'`. All `public/` asset references must use this prefix (e.g. `/gervisramos/music/track-01.mp3`).

**Design tokens** live in CSS custom properties on `:root` in `src/index.css` — `--violet`, `--coral`, `--bg`, `--surface`, `--border`, etc. All components consume these variables; don't hardcode colors.

**Animations:** Framer Motion `motion.*` components with `fadeUp` variants (custom delay index) are the standard pattern across all pages.

## Key files to update

| What | Where |
|------|-------|
| Project cards (title, description, link, tags, accent color) | `src/data/projects.js` |
| Music tracks (title, src path) | `src/pages/Music.jsx` — the `tracks` array |
| Social links / email | `src/pages/Contact.jsx` — the `socials` array |
| Global color palette / fonts | `src/index.css` |

## Adding music tracks

Drop `.mp3` files into `public/music/`, then add an entry to the `tracks` array in `src/pages/Music.jsx`:

```js
{ id: 4, title: 'My Track Name', src: '/gervisramos/music/your-file.mp3' }
```

## Deployment

```bash
npm run deploy
```

This runs `vite build` then `gh-pages -d dist`, pushing the `dist/` folder to the `gh-pages` branch. In GitHub repo Settings → Pages, set the source to the `gh-pages` branch.
