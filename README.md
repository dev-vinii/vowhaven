# Vowhaven

Wedding site sketch: invitation, gift list, RSVP, and ceremony schedule. Built with Next.js, following the same layout as CineTrack.

Demo couple: Clara & Hugo, Ouro Preto, 15 Nov 2026. Names and date live in `src/service/wedding.ts`.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- TanStack Query
- Vitest

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm lint` — ESLint
- `pnpm test` — Vitest

## Structure

```
src/
├── app/                 # routes and API
│   ├── api/gifts        # gift list + claim
│   ├── api/rsvp         # presence confirmation
│   ├── gifts/
│   ├── rsvp/
│   └── schedule/
├── components/
│   ├── gifts/
│   ├── invite/
│   ├── layout/
│   ├── rsvp/
│   └── ui/
├── hooks/
├── lib/
├── service/
└── test/factories/
```

Gift claims and RSVPs are in-memory for this sketch. They reset when the server restarts.
