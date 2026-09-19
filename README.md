# Mattia Stival — academic website for RStudio

A small R Markdown website designed for RStudio and GitHub Pages. Open
`MattiaStivalWebsite.Rproj` and click **Build Website**. Detailed instructions
are in `README_RStudio.md`.

## Update papers and slides

Open `data/site-data.js`. Each entry can include:

```js
{
  year: "2026",
  title: "Presentation title",
  detail: "Conference · City · Month 2026",
  slides: "https://link-to-slides.pdf"
}
```

An empty link (`slides: ""`) is automatically hidden. The same logic applies to `paper`, `doi`, and `poster`.

## Publish on GitHub Pages

1. Create a GitHub repository and upload everything in this folder.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.

GitHub will display the public URL after deployment. To use the site at `username.github.io`, name the repository exactly `username.github.io`.

## Preview locally

Run this command inside the folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Main files

- `index.html` — page copy and structure
- `assets/style.css` — colours, typography and responsive layout
- `data/site-data.js` — publications, proceedings, talks and slide links
- `assets/site.js` — collapsible sections and mobile menu
