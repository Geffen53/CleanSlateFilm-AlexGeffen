# Security and cost boundary

This site is intentionally a public, static film site. It has no accounts, API routes, Server Actions, database, uploads, payments, analytics SDK, or server-side contact form. Contact remains a `mailto:` link. Because there is no state-changing HTTP endpoint, an application rate limiter is not required today; adding a rate-limit service would create a new secret, dependency, and potentially billable provider without protecting a real endpoint.

## Enforced repository controls

- `npm run security:check` runs before every production build.
- The check fails if an `app/api`, `app/actions`, route handler, middleware/proxy, local env file, or Nodemailer dependency is added.
- `app/layout.tsx` sets `dynamic = 'error'`, so request-time data/cookies/server mutations fail the build until the static boundary is deliberately changed.
- `npm audit --omit=dev --audit-level=high` must pass before deployment.
- `vercel.json` makes Vercel run `npm run verify`, so a deployment fails closed when the security boundary or high-severity dependency audit fails.
- Next security headers are defined in `next.config.mjs`, including CSP, clickjacking protection, referrer restrictions, capability restrictions, and transport security in production.
- Local `next/image` optimization is disabled. Images resolve to the fixed `public/media` catalog, so the public `_next/image` transformation endpoint cannot be used to create unbounded image-processing requests.

## Required deployment checks

These controls require access to the hosting/provider dashboards and are not provable from this repository:

1. Deploy only the production build with `NODE_ENV=production`; do not expose `next dev`.
2. Confirm Vercel usage alerts/spend controls, deployment notifications, and an owner for billing review. A static site can still incur bandwidth charges if media is hotlinked or attacked.
3. Keep preview deployments protected if they contain unreleased media; confirm production environment variables are empty unless a future approved feature requires them.
4. Verify the custom domain and every subdomain, including the media host, serve HTTPS and have access/logging settings appropriate for public assets.
5. If a form, API, webhook, upload, account, or analytics feature is proposed, stop and replace the static-only boundary deliberately. Add provider-level rate limiting/WAF controls, bounded payloads, bot protection, abuse telemetry, and a cost ceiling before merging; do not reintroduce a Server Action as a shortcut.
