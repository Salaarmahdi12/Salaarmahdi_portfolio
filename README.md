# Salaar Mahdi — Vercel-ready portfolio

The current approved dark/lime animated portfolio, packaged as a static website. No React build, npm installation, package.json, environment variables or backend is needed.

## Structure

```text
salaar-portfolio-vercel-ready/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── modern.css
│   ├── motion.css
│   ├── projects.js
│   ├── app.js
│   ├── motion.js
│   └── assets/
│       ├── favicon.svg
│       ├── salaar-mahdi.jpg
│       ├── salaar-mahdi-campus-full.jpg
│       ├── salaar-mahdi-campus.jpg
│       ├── summarizer/ (five original project screenshots)
│       ├── school/ (three original project screenshots)
│       ├── fitfoot/ (two original project screenshots)
│       ├── bioview/ (three original project screenshots)
│       ├── computer-explorer/ (two original project screenshots)
│       ├── chronfit/ (two original project screenshots)
│       └── wordpress/ (two supplied web development illustrations)
├── vercel.json
├── .gitignore
├── .vercelignore
├── README.md
└── DEPLOY-URDU.md
```

## Vercel settings

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Root directory | Repository root (.) |
| Build command | Empty — no build |
| Install command | Empty — no installation |
| Output directory | public |
| Environment variables | None |

Upload the contents of this folder to a GitHub repository so that public/ and vercel.json appear at the repository root. In Vercel, choose Add New → Project, import the repository and deploy. If you instead upload the enclosing folder, select that folder as Root Directory. Do not select public as Root Directory: it is the Output Directory.

Alternatively, with Node.js installed, run `npx vercel@latest --prod` from this folder and follow the account and project prompts.

## Editing and local preview

Edit public/index.html for biography, degrees, contact and social links. Edit public/projects.js for project content. The three CSS files provide base styles, modern refinements and animations; app.js and motion.js provide interactions.

Open public/index.html directly, or serve public/ through a local static server. Python example: `python -m http.server 4173 --directory public`, then open http://localhost:4173.

## Important behavior

- The portfolio currently contains seven projects. Resume Generator, Encryption/Decryption Tool and Auto Parts Sale System were removed at the owner's request; their empty Desktop and Utilities filters were removed as well.
- WordPress Frontend Projects uses two supplied web development illustrations, with hover cycling and manual navigation. The previous illustration has been removed. These are illustrative artwork, not product screenshots.
- Chronfit AR replaces Weather Application, with an AR watch try-on description and two supplied screenshots (3D Watch Collection and Live AR Try-on). Its card uses the shared hover slideshow and manual controls.
- Computer Explorer 3D includes two supplied screenshots (3D Component Explorer and PC Assembly Lab) with hover cycling and manual navigation.
- BioView 3D System replaces Food Delivery App. It is described as a VR-based medical education application and includes three supplied screenshots: Interactive Anatomy, Organ Atlas, and Guided Learning. No unprovided implementation framework is claimed.
- FitFoot AR uses two actual supplied screenshots: Foot Measurements and Shoe Collection, with the same hover slideshow and manual controls as the other screenshot galleries. Full screenshots are preserved without cropping.
- Hover over the hero portrait to cycle through three photos every two seconds; move the mouse away to restore the original. Tap or click to advance manually. Reduced-motion mode disables automatic cycling. Keyboard users can focus the portrait and press Enter/Space; Escape restores the original. Reduced-motion preferences disable the transition.
- Contact prepares a mailto draft in the visitor's email app; it does not send email on a server.
- AI Text Summarization uses five actual supplied screenshots, and School Management System uses three (sign-in, admin dashboard, teacher dashboard). Hover either card to cycle through its screenshots; mouse leave restores the first. Previous/next buttons and dots support touch and keyboard navigation. Other project visuals remain labeled concept previews. Reduced-motion mode uses manual navigation only.
- Unverified project repository links remain hidden. GitHub profile and LinkedIn links are present.
- Optional Google Fonts fall back to system fonts when unavailable.
- Private source repositories do not automatically make the deployed portfolio private.
- This archive is deployment-ready, but packaging it does not create a live Vercel deployment.
- The abandoned diagonal hero CSS and generated cutout are intentionally excluded.

Official references: https://vercel.com/docs/builds/configure-a-build and https://vercel.com/docs/project-configuration/vercel-json
