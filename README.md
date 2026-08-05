# Portfolio template

A minimalist portfolio with a light cybersecurity/terminal accent — terminal-style
labels (`$ ls ./projects`), a monospace nav, and a blinking-cursor hero. No moving
backgrounds, no gradients, no clutter.

## File structure

```
portfolio/
├── index.html              → About (home) + Journal
├── projects.html            → Projects grid
├── certifications.html      → Certifications & Awards grid
├── experience.html          → Experience timeline
├── css/
│   └── style.css            → all styling / design tokens
├── js/
│   ├── data.js               ← 90% of what you'll edit — your content
│   └── main.js               → rendering + modal + nav logic, shared by all pages
├── assets/
│   ├── images/
│   │   └── placeholder-project.svg   ← swap per project once you have real screenshots
│   └── docs/
│       └── (put resume.pdf here)
└── README.md
```

Each HTML file is a real, separate page (not one big file with hidden sections), so
you can open `projects.html` directly, link to it from elsewhere, or deploy it as-is.

## What you'll actually edit

1. **`js/data.js`** — four arrays: `PROJECTS`, `CERTIFICATIONS`, `EXPERIENCE`, `JOURNAL`.
   Replace the placeholder objects with your own. Copy an existing object, change the
   values, keep the `id` unique.
2. **Project images** — each project object has an `image` field pointing at
   `assets/images/placeholder-project.svg`. Drop your own screenshots into
   `assets/images/` (e.g. `sales-dashboard.png`) and update that field per project.
   Recommended size: roughly 1280×800 or any 16:10 image — it'll be cropped to fit.
3. **`index.html`** — swap "Your Name", the hero bio, the email/LinkedIn/GitHub links,
   and the "About" paragraphs.
4. **`assets/docs/resume.pdf`** — drop your résumé PDF here (the nav button links to it).

You generally won't need to touch `css/style.css` or `js/main.js` unless you want to
change the design itself — those two files are shared by every page.

## Pages

- **About** (`index.html`) — hero intro, short bio, skills, and a **Journal**: a
  blog-style list where each entry opens in a modal. This is where your competition
  write-ups and OJT stories go.
- **Projects** (`projects.html`) — cards with a thumbnail image; click a card to open
  the full write-up (problem → approach → outcome) in a modal.
- **Certifications** (`certifications.html`) — certs and awards as cards with a modal
  for details.
- **Experience** (`experience.html`) — a timeline, no modal needed here — kept scannable.

## Customizing the palette

All colors are CSS variables at the top of `css/style.css` under `:root`. The accent
green is `--accent` / `--accent-dark` — change those two if you want a different accent
color; everything else derives from them.

## Running it locally

No build step — it's plain HTML/CSS/JS. You can open `index.html` directly, but since
this is now a multi-page site, it's cleaner to run a tiny local server from this folder
so relative links behave exactly like they will once deployed:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying

Any static host works: GitHub Pages, Netlify, Vercel, or Cloudflare Pages. No build
step — drag-and-drop this folder onto Netlify, or push it to a GitHub repo and enable
Pages.
