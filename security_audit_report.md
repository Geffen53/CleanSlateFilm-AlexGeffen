# Clean Slate production security audit

**Assessment date:** 2026-08-15/16 (repository and local runtime)  
**Scope:** this repository, its Next.js build, package lockfile, server action, browser code, static assets, Vercel configuration, and checked-in operating documentation.  
**Confidence rule:** “Confirmed” means demonstrated in source/build/runtime. “Latent” means the code is present but not currently reachable from the rendered UI. Vercel project settings, DNS, media-host configuration, Gmail account controls, source-control settings, and production telemetry were not available; those are explicitly treated as unverified risk.

## Executive Risk Summary

Today this is a low-data public marketing site, not a SaaS system. There is no account system, database, payment flow, upload endpoint, Firebase integration, or active analytics SDK in the repository. The static pages and public film media are intentionally public, and the live contact path is a `mailto:` link.

The real risk is operational drift and an avoidable patch gap. The application is pinned to Next.js 16.1.6 and the lockfile contains five high-severity production dependency findings, including multiple Next.js request-smuggling, SSRF, authorization-bypass, and denial-of-service advisories. The dormant `app/actions/contact.ts` contains a server-side Gmail credential boundary with no rate limiting, no explicit request/origin policy, and user-controlled values placed into a mail subject. If someone wires that action to a form under deadline pressure, it becomes an unauthenticated spam relay and a personal-data processing system.

There is no checked-in CSP, HSTS, Permissions-Policy, or other complete security-header baseline in `next.config.mjs`; no CI workflow, dependency update gate, secret scanning, provider inventory, or incident/audit trail is present. A breach of the current static site would more likely be supply-chain/runtime compromise or deployment misconfiguration than an IDOR attack.

## Critical Findings (exploitable, high confidence)

No current, high-confidence critical exploit against the rendered static routes was proven from repository evidence. The site has no authenticated privileged surface or data store to escalate into.

That is not a clean bill of health: the following High findings can become critical if the dormant server action is exposed or if the vulnerable framework is deployed in a serverful configuration.

## High Risk Findings (likely but situational)

### H-01 — Production dependency set contains five high-severity advisories (confirmed)

`npm audit --omit=dev --json` reported five high findings in the production dependency graph: `next@16.1.6`, `nodemailer@8.0.2`, `postcss` nested under Next, `sharp` nested under Next, and `nanoid` nested under PostCSS. The Next range is below several fixes and includes advisories for request smuggling, SSRF in WebSocket/rewrites, middleware/proxy authorization bypasses, unauthenticated Server Function disclosure, and multiple unauthenticated DoS conditions. Nodemailer is below fixes for SMTP/header injection and file/URL access issues. The lockfile is therefore not production-safe to ship unchanged.

**Impact:** depending on the Vercel/runtime path, an attacker may be able to exhaust resources, bypass routing assumptions, reach internal services, or exploit a future server action. The static pages reduce reachable code today but do not remove the vulnerable runtime from the deployment artifact.

**Evidence:** `package.json:17`, `package-lock.json`, and the audit command result captured during this review. Fix by upgrading Next to the current patched release, Nodemailer to a patched release or removing it, then regenerating the lockfile and rerunning audit/build.

### H-02 — Dormant Gmail server action has no abuse controls and trusts client input (latent, high confidence)

`app/actions/contact.ts:44-77` exports `sendContactEmail`, accepts a client-supplied object, and sends mail with environment credentials. There is no authentication, authorization, IP/user rate limit, request budget, origin allowlist, abuse counter, CAPTCHA/turnstile, or durable audit record. The honeypot (`:45`) is optional and trivially bypassed. `name` and `inquiryType` are only length-trimmed (`:31-33`) and are interpolated into the `subject` (`:69`); newline/control-character rejection is absent. The action also returns detailed service-state information (`:61`), allowing callers to distinguish configuration failure.

The current UI does not import this action, so build output showed no contact API route and the live path is still `mailto:`. This is latent, not a present unauthenticated endpoint. It must nevertheless be removed, isolated, or hardened before any form imports it.

**Impact if wired:** anonymous attackers can send arbitrary mail through the production Gmail account, burn quotas, damage sender reputation, inject header content if the transport accepts it, and submit personal data into a new server-side retention/logging boundary.

### H-03 — Production security headers are not defined in source (confirmed source gap; deployment effect unverified)

`next.config.mjs:1-36` defines image settings, a media cache header, and a redirect, but no Content-Security-Policy, `frame-ancestors`/X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS, or explicit cache policy for HTML/server responses. A local runtime happened to emit some platform/framework headers, but that is not a checked-in production contract and does not include CSP. Vercel project headers/settings were unavailable.

**Impact:** a future script, dependency, or content injection has no repository-controlled browser containment; clickjacking and unintended referrer disclosure remain deployment-dependent. Add a deliberately tested header baseline at the platform boundary, including a narrowly scoped media allowlist and CSP compatible with Next image/font behavior.

### H-04 — No dependency, secret, or security gate in CI/CD (confirmed)

There is no `.github/workflows` or equivalent checked-in CI workflow, no code-owner/review gate, no `npm audit`/lockfile policy, no secret scan, and no check for new scripts, iframes, remote origins, or server data flows. `vercel.json` is empty. The only operational control is prose in `AGENTS.md` and `docs/compliance-drift-audit.md`.

**Impact:** a compromised dependency, accidental secret, or deadline-driven analytics/form addition can ship without an automated stop. This is the most likely path for the current high-risk conditions to recur.

## Medium and Low Risk Findings (defense in depth gaps)

### M-01 — No current authentication/authorization or sensitive backend boundary (confirmed absence)

No auth provider, session verifier, role/claim check, database, object storage API, cron handler, webhook, or admin route exists in the checked-in application. That prevents present IDOR/BOLA testing, but it also means any future backend feature will be added without an established server-owned authorization layer. Do not treat client visibility or static generation as authorization.

### M-02 — JSON-LD uses `dangerouslySetInnerHTML` (currently trusted, brittle) 

`app/layout.tsx:45-71` serializes a static object into an inline script. No user-controlled values currently reach it, so this is not a demonstrated XSS. It is a fragile sink: future metadata changes must use safe JSON serialization that prevents `</script>` termination, and CSP must account for the inline script.

### M-03 — Browser consent state is localStorage-only and unvalidated

`utils/cookie-consent.ts:6-27` parses arbitrary localStorage JSON without schema validation and stores preferences in a script-readable key. This is acceptable for a non-security preference, but it is not consent evidence and must never gate server-side collection. `clearAllCookies()` (`:30-43`) clears all local storage and cookies if reused, which can erase unrelated state.

### M-04 — Third-party media and outbound origins lack an allowlist

`data/film.ts:9-12` loads MP4/PDF assets from `media.cleanslatefilm.com`; contact and page components link to Instagram, IMDb, and consultant sites. There is no origin inventory or automated review. A future remote-origin change could add tracking, unsafe embeds, or rights/privacy exposure without touching legal pages.

### M-05 — Public asset and privacy exposure is intentional but ungoverned

All cast/crew bios, names, headshots, film stills, and press media are static and publicly retrievable. No access control, takedown workflow, asset retention policy, or rights manifest is represented in code. This is not an exploit by itself, but a compromised or mistaken deploy could expose unreleased media and there is no technical rollback/visibility gate in the repo.

### M-06 — Error and monitoring coverage is inadequate for investigation

The only explicit server logging is `console.error` in `app/actions/contact.ts:74-76`, logging a generic failure without request ID, source, outcome, or abuse context. There is no checked-in alerting, audit log, incident runbook, security event schema, or retention/forensic plan. Production Vercel/email logs were not available for verification.

### L-01 — Repository hygiene and build provenance are weak

`README.md:5-24` is stale generic AI Studio/photo-generation guidance and mentions a `GEMINI_API_KEY` that is not used by this codebase. The build also warned that Next inferred a parent workspace root because another lockfile exists. This can cause confusing local/build provenance and makes secret/config expectations harder to audit.

### L-02 — Browser data policy is documented but not mechanically enforced

`docs/compliance-drift-audit.md:13-26` accurately calls out consent, media, Gmail, and release drift, but the controls are prose only. Treat the document as a risk register, not a security control.

## Business Logic and Abuse Risks

- If the dormant action is connected, anonymous mail relay abuse is the primary business-logic failure: attackers can submit unlimited inquiries, poison the inbox, trigger provider limits, and make legitimate requests disappear.
- The action has a fixed Gmail pool (`app/actions/contact.ts:18-22`) but no application-level queue, timeout budget across retries, or per-origin/per-recipient quota. Concurrent server instances can each create their own module-level transporter and multiply outbound pressure.
- The contact flow changes from direct mail to server processing if the action is wired. That creates new data retention, access, breach-notification, and provider-account risks not covered by the current privacy copy.
- Public press-kit and media URLs are bearer-style URLs. Anyone who obtains them can download the material; do not put unreleased or licensed assets there without a separate access/expiry design.
- No billing, quota, account, or paid entitlement path was found, so no current billing bypass was testable.

## Architectural and Systemic Risks

The architecture is simple but has no established secure backend pattern. The repository contains a dormant server action alongside a static mailto UI, so the most dangerous future change is a “small” form import that silently changes the threat model. Security headers, origin policy, dependency freshness, release review, vendor inventory, logging, and incident ownership all live outside code or are absent. Production cloud/IAM/DNS/CDN controls could not be verified from this checkout; assume they are unknown until exported and reviewed.

## “Unknown Unknown” Observations

- Vercel project members, deployment protection, environment-variable scopes, preview exposure, branch protection, and audit logs were not available.
- DNS records, media bucket ACLs, origin shielding, signed URL policy, and CDN purge/retention behavior were not available.
- Gmail account MFA, app-password scope, forwarding rules, sending limits, and compromise alerts were not available.
- No evidence proves production is running the same lockfile/build that was audited.
- Next’s framework headers observed on a local process are not proof of production headers.
- The static build proves route generation, not browser CSP behavior, remote-media policy, email-provider behavior, or incident detectability.

## What Attackers Would Try First

1. Fingerprint the deployment and probe the unpatched Next.js runtime for known DoS, proxy, RSC, image, and routing behaviors.
2. Enumerate preview deployments, source maps, environment leakage, and public `.next`/asset paths.
3. Test whether the dormant Server Action is reachable or accidentally imported in a different deployment, then spam the Gmail transport.
4. Abuse remote media/PDF and outbound-link trust to harvest referrers or induce provider-side tracking.
5. Search Git history, Vercel environment variables, and developer machines for Gmail credentials or the stale Gemini key.

## What I Would Exploit If I Had One Weekend

I would first patch/fingerprint Next and compare preview versus production. In parallel I would search deployment history and build manifests for a reachable action ID, then send controlled malformed contact payloads (including oversized and newline-containing fields) to test rate limiting, error leakage, and header behavior. I would inspect Vercel headers, preview authentication, source-map exposure, media-host ACLs, and environment-variable scopes. If the action were reachable, it would be the fastest route to inbox disruption and credential/provider impact.

## Prioritized Remediation Strategy

1. **Patch the runtime now.** Upgrade Next and transitive vulnerable packages, remove Nodemailer if the direct-mail contract remains, regenerate the lockfile, run `npm audit --omit=dev`, build, and deploy a canary. This removes the broadest remotely reachable risk.
2. **Close the dormant contact boundary.** Delete the unused Gmail action or move it to an explicitly approved API with strict schema validation, control-character rejection, origin/CSRF checks, rate limiting, bot protection, bounded payloads, provider quotas, and structured redacted audit logs. Do not wire it by convenience.
3. **Export and verify production controls.** Capture Vercel headers, environment-variable scopes, preview access, deployment permissions, DNS/CDN/media ACLs, and Gmail MFA/app-password posture. Make the required header baseline reproducible in code/config.
4. **Add CI guardrails.** Require lockfile audit, secret scanning, dependency review, build, changed-file lint, and an allowlist check for scripts, iframes, remote origins, and new server actions. Protect the default branch and deployment token.
5. **Create an incident-ready data-flow inventory.** Record every provider, asset class, owner, retention, policy URL, access path, and rollback/takedown procedure. Add request IDs and abuse metrics at any future server boundary.
6. **Only then add product changes.** Any account, upload, analytics, or payment feature needs server-side authorization and threat modeling before UI work.

## What Not to Fix Yet (explicit false urgency)

- Do not add an analytics/consent vendor, account system, payment system, or CAPTCHA merely to look “more secure.” The current static site does not need them.
- Do not build a DSAR portal or invent legal promises without an actual data owner and operating process.
- Do not wire Gmail SMTP because the action already exists. Keeping `mailto:` is currently the smaller and safer data boundary.
- Do not add broad CSP exceptions, third-party script hosts, or iframe embeds to solve hypothetical marketing needs; approve each origin first.
- Do not spend the first remediation cycle on localStorage preference hardening or cosmetic privacy copy while vulnerable runtime packages and deployment controls remain unverified.

## Security Posture Score

**4.5/10 at the time of the initial audit (current public site: materially improved; provider posture still unverified).**

The current static attack surface, absence of accounts, and lack of active data collection are meaningful positives. The initial score was pulled down by the unpatched production dependency graph, latent credentialed mail action, missing header baseline, and weak release controls. Those code-level issues were remediated after this audit: the mail action and Nodemailer were removed, Next was upgraded, `npm audit --omit=dev` is clean, security headers are enforced, image optimization is disabled to remove a public transformation endpoint, and `npm run security:check` gates the static-only boundary. A literal 10/10 cannot be honestly claimed from repository changes: Vercel billing controls, deployment permissions, DNS/CDN/media ACLs, HTTPS coverage, and operational monitoring still require dashboard/runtime verification.

## Remediation applied after the initial audit

- Removed `app/actions/contact.ts` and the Nodemailer packages. There is no server-side mail relay or state-changing endpoint to rate-limit.
- Upgraded Next.js to 16.3.1; `npm audit --omit=dev --audit-level=high` now reports zero vulnerabilities.
- Added CSP, clickjacking, referrer, capability, cross-origin, MIME, and production transport headers in `next.config.mjs`.
- Disabled local Next image optimization and added a long CDN cache policy for the fixed public media catalog to reduce unbounded transform/cost exposure.
- Added `npm run security:check` and `npm run verify`; builds fail if a server route, Server Action, proxy/middleware, local env file, or mail-relay dependency is introduced.
- Set `vercel.json` to run `npm run verify`, making the hosted build fail closed on a high-severity audit or boundary violation.
- Validated a production build, response headers, direct media delivery, and a 404 response from the disabled `/_next/image` endpoint.
