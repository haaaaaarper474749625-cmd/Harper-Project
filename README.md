# Harper Project

A Vercel-ready content website for introducing global dog breeds by country.

## Recommended stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Local content files with a CMS-ready content source layer

## Why this stack

- Works very smoothly on Vercel.
- Gives us static generation for content pages.
- Keeps the first release simple: no auth, no database.
- Makes future CMS integration straightforward by swapping the content source.

## Project structure

- `src/app`: routes and page UI
- `src/content`: local typed content files
- `src/lib/content`: content source abstraction for future CMS migration

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Import the current `Harper-Project` folder as a Vercel project.
2. Framework preset: Next.js.
3. Build command: `npm run build`
4. Output setting: default Next.js output

No environment variables are required for this first version.

## Automatic deploys

Pushes to the `main` branch trigger the GitHub Actions workflow in `.github/workflows/deploy-vercel.yml`, which rebuilds and deploys the site to Vercel automatically.
