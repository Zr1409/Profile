# Tran Van Du - Developer Portfolio

Personal portfolio for **Tran Van Du**, a Fresher Fullstack Developer focused on Java, Spring Boot, React, TypeScript and MySQL. The site presents selected projects, experience, skills, education and certificates, with direct links to GitHub, LinkedIn and a downloadable CV.

## Tech stack

- React and TypeScript
- Vite for development and production builds
- CSS variables for the design system; Tailwind CSS for utility classes
- Lucide React and local SVG icons
- Local Sora, Poppins and JetBrains Mono fonts

This is a static frontend. Contact actions link to email and professional profiles; there is no message submission backend. No API keys or environment variables are required.

## Getting started

Use **Node.js 22.12+** and npm. The repository was verified with Node.js 22.16.0.

```sh
npm ci
npm run dev
```

Open `http://localhost:2910`. Vite uses another port if 2910 is occupied. On Windows, stop a running Vite server before reinstalling dependencies to avoid locked native binaries.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the versions recorded in `package-lock.json` |
| `npm run dev` | Start the development server |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run build` | Check TypeScript and build production files into `dist/` |
| `npm run preview` | Serve the production build locally, normally on port 4173 |

## Project structure

```text
public/
  files/
    CV_TRAN_VAN_DU.pdf
    certificates/          Original certificate PDFs
  fonts/                   Local font files and their licenses
  icons/                   Favicons and Apple touch icon
  images/
    portraits/             Portraits in 560px and 840px variants
    certificates/          Certificate previews
    projects/
      minlish/
      talenthub/
      booknest/
      sources.json         Screenshot provenance and original dimensions
  sitemap.xml
src/
  assets/branding/         Light and dark VanDu logos, bundled by Vite
  components/
    dialogs/               Case study, certificate and screenshot dialogs
    icons/                 GitHub and LinkedIn SVG icons
    layout/                Navigation, footer and logo
    media/                 Portrait slideshow, project gallery and tech strip
  context/                 Theme state and local preference storage
  data/                    Portfolio content and media metadata
  hooks/                   Scroll reveal, slideshow and dialog transitions
  sections/                Page sections in their reading order
  types/portfolio.ts       Shared content and media types
  App.tsx                  Page composition and active section tracking
  index.css                Design tokens, responsive styles and motion
  main.tsx                 React entry point
index.html                 Document metadata, font preloads and favicon links
vercel.json                Vercel build and response headers
vite.config.ts             Vite configuration
```

Public assets are served from `/`: for example, `public/images/portraits/standing-840.webp` is available at `/images/portraits/standing-840.webp`. Branding assets imported from `src/assets/` receive hashed filenames in the production build.

## Updating content

| What to change | Where |
| --- | --- |
| Identity, contact links, projects, experience and education | `src/data/portfolioData.ts` |
| Skill groups and technologies | `SKILL_SHOWCASE` in `src/data/portfolioData.ts` |
| Certificate descriptions and document paths | `src/data/certificates.ts` |
| Project screenshot paths, captions and dimensions | `src/data/projectImages.ts` |
| Portrait order and crop positions | `src/components/media/PortraitSlideshow.tsx` |
| Menu labels and section anchors | `src/components/layout/Navbar.tsx` |
| Colors, typography, spacing and responsive rules | `src/index.css` |
| Browser title, descriptions and social metadata | `index.html` |

Replace the CV at **`public/files/CV_TRAN_VAN_DU.pdf`** without changing its public URL: **`/files/CV_TRAN_VAN_DU.pdf`**. Keep dates, qualifications and project claims aligned with the original documents.

For project screenshots, keep the full image and an `-840.webp` preview in the project's folder. Update both paths and the original dimensions in `projectImages.ts`, then record the source in `public/images/projects/sources.json`. The current galleries use genuine website, frontend or implementation-report captures. Responsive variants are intentional; avoid keeping unused duplicate originals or outdated login captures.

Certificate previews and PDFs share the `hackerrank-<name>` filename convention. Keep font license files alongside the fonts.

## Interaction and accessibility

- Navigation links to sections with room for the sticky header; compact navigation is used at widths of 1000px and below.
- Dialogs support Escape, focus trapping and focus restoration. Circular close controls and subtle press feedback are shared across the site.
- Portraits and certificates advance every 5 seconds. Certificate autoplay continues through hover and manual selection; opening its dialog pauses the carousel temporarily. The Pause/Play control preserves an explicit pause. Portraits also pause on hover, focus and manual selection.
- Offscreen or hidden slideshows pause. `prefers-reduced-motion` disables autoplay and entrance animations.
- Scroll effects replay when a complete section frame leaves and re-enters the viewport. Text stays readable during the short transitions, and hero action buttons remain immediately usable.
- Dialog code loads separately and preloads when its trigger is hovered or focused. Images use explicit dimensions and lazy loading where appropriate.

## Validation

```sh
npm run typecheck
npm run build
npm run preview
```

Check the built site at 375, 768, 1024 and 1440px. Review navigation and anchors, light/dark themes, CV download, every gallery image, certificate PDFs, dialog keyboard behavior and slideshow pause/resume. Check the browser console and network panel for missing images, fonts or documents.

Local review scripts, screenshots and backups are kept in `.review/`, which is ignored by Git. There is no committed automated test suite.

## Deployment

Deploy `dist/` to a static host after a successful build. The included Vercel configuration uses `npm run build` and `dist/`. Public asset paths are absolute, so the default setup expects deployment at the domain root. Update Vite's base and asset URL strategy before hosting under a subdirectory. Review `public/sitemap.xml` when changing the production domain.

Do not edit generated files in `dist/` or commit `node_modules/`, `.review/`, credentials or local environment files.
