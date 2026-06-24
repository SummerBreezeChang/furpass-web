# FurPass — web

Marketing site for **FurPass**, the secure pet-care guide you share with your sitter.

> Your pet's whole world, in one secure link.

## Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript
- Auto-generated social preview via `app/opengraph-image.tsx`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx              Site metadata, fonts, OG/Twitter cards
  page.tsx                Landing page
  icon.png                Favicon (auto-wired by Next.js)
  opengraph-image.tsx     1200×630 social preview (auto-wired)
  twitter-image.tsx       Re-exports the OG image for Twitter
  privacy/                Privacy policy
  support/                Support page
public/
  screens/                App screenshots (screen-01.png ... screen-12.png)
```

## Deploy

This site is built to deploy on [Vercel](https://vercel.com). Push to `main` and connect the repo in the Vercel dashboard — zero config needed.

## License

© 2026 FurPass. All rights reserved.
