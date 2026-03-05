# AutoML Landing Page

Standalone marketing/landing page for [AutoML](https://github.com/automl) — the open-source, no-code machine learning framework.

## Tech Stack

- **Vite** — build tool & dev server
- **Tailwind CSS 3** — utility-first styling
- **Vanilla JS** — no framework overhead for a static landing page

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The `dist/` folder after `npm run build` is a static site. Deploy it to:

- **Vercel**: `npx vercel --prod`
- **Netlify**: drag & drop `dist/` folder, or connect the repo
- **GitHub Pages**: push `dist/` contents to `gh-pages` branch

## Project Structure

```
AutoMlLandingPage/
├── index.html              # Main page (all sections)
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind theme & extensions
├── postcss.config.js       # PostCSS plugins
├── public/
│   └── favicon.svg         # Site favicon
└── src/
    ├── main.js             # Scroll animations, navbar, FAQ, mobile menu
    └── style.css           # Tailwind directives & custom components
```

## License

MIT
