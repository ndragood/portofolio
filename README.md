# Cyber Security Portfolio — Homepage

This is a growing slice of the project from `claude.md`. Built so far:

- **Homepage** — Hero, Quick Stats, Featured Skills, Featured Projects
- **Contact page** (`/contact`) — validated form (React Hook Form + Zod) posting to an API route, plus a social links / direct contact card

The rest (About, Skills, Projects, Certifications, Writeups) can be added page
by page on top of this same foundation.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design direction

- **Palette** comes straight from the brief: void background `#0A0E17`,
  primary mint `#00FFB2`, secondary cyan `#00D4FF`, critical red `#FF4D4D`,
  white text — plus a couple of supporting neutrals (`surface`, `line`,
  `ink-muted`) so cards and borders don't have to fight the four signal
  colors.
- **Typography**: Space Grotesk for display headings, Inter for body copy,
  JetBrains Mono for anything that reads like data — labels, stats, nav
  links, status text. That mono treatment is doing most of the "SOC
  dashboard" work, instead of leaning on terminal-green clichés.
- **Signature element**: the slim live status strip in the hero
  (`components/sections/status-strip.tsx`) — a status dot, session uptime,
  last-scan time. It's the one place the "monitoring console" idea shows up
  literally; everything else stays calm and editorial.

## Personalize it

Almost everything content-related lives in `src/data/`:

| File | What to edit |
|---|---|
| `src/data/site.ts` | Name, tagline, nav links, resume path, social URLs |
| `src/data/stats.ts` | Quick stats numbers |
| `src/data/skills.ts` | Featured skills chips |
| `src/data/projects.ts` | Featured project cards |

Drop your resume at `public/resume.pdf` so the "Download CV" buttons work.

## Contact form delivery

The form validates and posts to `src/app/api/contact/route.ts`, which currently
just logs the submission to the server console — nothing gets emailed yet.
The route file has a commented-out [Resend](https://resend.com) snippet ready
to uncomment once you `npm install resend` and add a `RESEND_API_KEY`.

## What's not built yet

On purpose, to keep this incremental: the About / Skills / Projects /
Certifications / Writeups pages, the interactive terminal, and the full
Security Dashboard widget from the brief. The nav links already point to
those routes (`/about`, `/skills`, etc.) so they're ready to be built next —
just say which page you want next.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS ·
Framer Motion · Lucide React
