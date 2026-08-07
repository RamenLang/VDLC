# VDLC — GitHub Pages deployment

This repository can be published to GitHub Pages.

Options:

- Serve from repository root (recommended): enable GitHub Pages in the repository settings and select the `main` (or `master`) branch and the `root` folder.
- Automatic deployment via GitHub Actions: this repo includes a workflow at [.github/workflows/gh-pages.yml](.github/workflows/gh-pages.yml) that will publish the repository root to the `gh-pages` branch whenever `main` or `master` is pushed.

How the workflow works:

- When you push to `main`/`master`, the Action checks out the repository and uses `peaceiris/actions-gh-pages` to publish the repository root to the `gh-pages` branch using `GITHUB_TOKEN`.

Notes:

- The workflow publishes the whole repository root. If you prefer to publish only a build output (for example a `docs` folder), update `publish_dir` in the workflow to point to that folder.
- If your site uses a custom domain, add a `CNAME` file to the repository root (or `docs/` if you publish from there).

Files to check before publishing:

- [index.html](index.html)
- [style.css](style.css)
- [assets/](assets/)
