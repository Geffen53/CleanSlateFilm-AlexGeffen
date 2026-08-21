# Clean Slate film site

Public, static-first Next.js site for the Clean Slate short film. The site has no accounts, API routes, database, or server-side contact form. Optional Vercel Web Analytics is loaded only after an explicit opt-in and remains disabled for Global Privacy Control visitors. Contact remains a direct `mailto:` link.

## Run Locally

**Prerequisites:** Node.js 20.9+

```sh
npm install
npm run dev
```

## Production verification

```sh
npm run security:check
npm audit --omit=dev --audit-level=high
npm run build
npm run start
```

`security:check` intentionally fails if a server route, Server Action, proxy/middleware, local env file, or mail-relay dependency is introduced. See [docs/security-baseline.md](docs/security-baseline.md) before changing the data or deployment boundary.

## Regenerating gallery data

Images and their metadata now come directly from `public/*` instead of being hand-written.
`npm run dev` and `npm run build` automatically invoke `npm run generate:photo-data` beforehand (via `predev`/`prebuild`), so the JSON that powers `/photos` is regenerated before the app starts or before Vercel builds. Run `npm run generate:photo-data` manually (with `PHOTO_YEAR=2025` if you need a different default) whenever you want to regenerate without restarting the dev server or the build.
