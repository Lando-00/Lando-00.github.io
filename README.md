# Lovanto George Portfolio

Personal portfolio for `Lando-00.github.io`, rebuilt as a static Astro site.

## Stack

- Astro
- TypeScript
- Custom CSS
- GitHub Pages deployment

## Local development

```powershell
npm install
npm run dev
```

## Build and validate

```powershell
npm run build
npm run validate
```

The validation script checks that the built site contains the homepage, gallery, favicon, image assets, updated portfolio content, and the legacy `gallery.html` redirect.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the Astro site and deploys the `dist` output to GitHub Pages.

If GitHub Pages is still configured for branch-based publishing, switch the repository Pages source to **GitHub Actions** before relying on the workflow.
