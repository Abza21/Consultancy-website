# Senosi Consulting Site (plain HTML, CSS, JavaScript)

No build step, no Node. Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Edit before pushing
- `js/config.js`: LinkedIn URL, Formspree form ID, GA4 ID (applied on every page)
- `js/map.js`: map marker locations
- `css/styles.css`: colours (top of file) and layout
- Each `.html` file: edit text directly. Search all files for `[EDIT]` and `[ADD]`.
- Replace `USERNAME` in `sitemap.xml`, `robots.txt` and the `canonical`/`og:url` tags with your GitHub username or custom domain (use find and replace across files).
- New blog post or project: copy an existing page in `insights/` or `portfolio/`, edit it, then add a link in `insights.html` / `portfolio.html`.

## Deploy
Push to GitHub, then Settings > Pages > Source: Deploy from a branch > `main` / root.
