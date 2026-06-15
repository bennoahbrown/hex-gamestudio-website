# Hex Game Studio — Website

Marketing and product website for **Hex Game Studio**, an independent iLottery game developer.

Built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

## Stack

- **Framework:** Next.js 16.1.1 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4
- **Language:** JavaScript (no TypeScript)
- **Package manager:** npm

## Routes

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/studio` | Studio |
| `/games` | Games index |
| `/games/cash-clock` | Cash Clock |
| `/games/chance-lottery` | Chance Lottery |
| `/contact` | Contact |
| `/cashclock/demo` | Cash Clock demo (served from `public/cashclock/demo/`) |

## Development

```bash
npm install
npm run dev        # dev server on http://localhost:3000
```

## Production

```bash
npm run build      # compile to .next/
npm run start      # serve on http://localhost:3000
```

## Adding a route

Create a `page.js` file under `src/app/(main)/`:

```
src/app/(main)/new-page/page.js  →  /new-page
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
