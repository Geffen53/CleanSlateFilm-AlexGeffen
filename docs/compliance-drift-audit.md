# Compliance drift and future risk audit

**Review date:** August 21, 2026
**Scope:** the Clean Slate public Next.js site, repository workflow, contact path, browser privacy controls, embedded media, and legal-information surfaces.  
**Purpose:** identify how a low-data static site could regress as new code, vendors, or marketing requests are introduced. This is an engineering risk review, not legal advice or a certification.

**Remediation status:** The unused Gmail/Nodemailer Server Action has been removed; Next.js is patched; `npm audit --omit=dev` is clean; security headers, the consent-gated Vercel Web Analytics integration, and a static-only build boundary check are now enforced in source; `vercel.json` runs the fail-closed verification command. Provider-dashboard controls and a formal CI runner still require verification outside this checkout.

## Executive drift risk summary

The site has a relatively small current privacy footprint: there are no accounts, payments, user profiles, advertising pixels, or behavioral marketing tags in the repository. The optional Vercel Web Analytics SDK is loaded only after analytics opt-in and is blocked when Global Privacy Control is enabled. Contact is presented as a `mailto:` flow, and the public legal links describe the current site behavior.

The durable risk is still process, not today’s collection volume. The site now has a build-time static-boundary check, dependency audit command, and header baseline, but there is no hosted CI workflow, third-party inventory, owner, retention schedule, or documented release approval. A future contributor can still add a script, analytics SDK, form submission, or marketing tag faster than the privacy policy can be updated unless the verification command is required by the deployment platform.

## Critical drift vectors

1. **Consent can become decorative.** The current Vercel Web Analytics integration is bound to the `analytics` choice and GPC check, but a future SDK could still be loaded before consent or without honoring those controls.
2. **Third-party media can expand silently.** The homepage loads remote MP4 media, while external media and social URLs are spread across data and page components. There is no allowlist or review record for new origins.
3. **The contact boundary can change by convenience.** The live UI is intentionally `mailto:` and the build check rejects `app/actions`, `app/api`, and mail-relay dependencies. Bypassing or weakening that check would create server-side personal-data processing, credentials, logs, and retention obligations.
4. **Release controls are still partly social.** The repository has a checked-in verification command, but no hosted CI, code-owner rule, pull-request template, or automated privacy/accessibility review.

## High-risk process failures

- No automated check detects new `next/script`, iframe origins, tracking packages, server-side form persistence, or changes to legal routes.
- No named owner is recorded for privacy, accessibility, third-party vendors, rights permissions, or inquiry retention.
- The static-only boundary is enforced by `npm run security:check`, but a contributor can still modify the check unless branch/CI review protects it.
- `next.config.mjs` now declares CSP, permissions policy, clickjacking, referrer, transport, and media-cache headers. Production edge settings are not represented in this repository.
- The Vercel verification command proves dependency/build/header source state, not consent ordering, GPC behavior, provider behavior, or rights accuracy in a real browser.

## Medium and low-risk process gaps

- Retention of inquiry email, hosting logs, and provider records is described qualitatively but has no owner or review interval.
- The consent utility is browser-local and not legal evidence; a future data collector must not treat it as server authorization.
- There is no recurring accessibility review or third-party PDF/player check.

## Change pathway analysis

| Pathway | Current boundary | Likely drift | Required guardrail |
| --- | --- | --- | --- |
| Analytics measurement | Opt-in Vercel Web Analytics; no custom events; query strings stripped | A copied tag or second SDK bypasses consent or adds identifiers | Keep the provider inventory and privacy-page description aligned with every data-flow change |
| Marketing or growth request | No marketing scripts in source | A copied tag or pixel bypasses consent | Review all new scripts and origins; fail CI on unapproved additions |
| Video or social promotion | Remote MP4 media plus external links | New provider receives identifiers or changes terms | Maintain a provider inventory and privacy/terms link per provider |
| Contact improvement | Live `mailto:`; build rejects server actions and mail-relay dependencies | A check is weakened and form data is stored or sent through a provider without notice | Provider, retention, security, and policy review before wiring |
| Experiment or feature flag | No feature-flag framework found | Temporary tracking or copy becomes permanent | Expiration owner and removal date for every experiment |
| Emergency release | No checked-in release gate | Hotfix ships without legal/accessibility review | Minimum two-person review or documented exception owner |

## Documentation and ownership gaps

`AGENTS.md` is the strongest current control: it preserves the direct-mail contact contract, the no-Gmail-UI rule, and accessibility/brand guidance. It does not name a policy owner, define a vendor register, or explain what must be reviewed when data flows change. The new legal pages and this audit create a discoverable baseline, but they still need an accountable human owner and a review date.

## Tooling and script-injection risks

The repository uses `@vercel/analytics` through a consent-gated client component; it has no pixel or tag-manager usage. The meaningful external surfaces are the Vercel analytics intake, remote trailer/loop media, outbound Instagram/IMDb/consultant links, the remote press-kit host, the email application, `next-themes`, and hosting/delivery infrastructure. A new script or iframe would be high-impact; CSP now provides a default deny/allowlist baseline, but the origin still needs an inventory entry and review.

## Cultural and incentive misalignments

The easiest path remains the least documented path: paste a vendor snippet, add a tracking dependency, or weaken the static-boundary check. Marketing deadlines and “temporary” experiments would reward speed over review unless `npm run verify` is required by CI/deployment. The site should make the safe path easier than the shortcut through a short checklist and an automated inventory check.

## Unknown-unknown observations

- Vercel project settings, DNS/CDN logs, email-provider retention, and media-host configuration are outside the repository and therefore outside this evidence set.
- A future press-kit replacement could introduce an inaccessible PDF or new embedded viewer without a source diff that looks privacy-sensitive.
- A change to `data/film.ts` can alter a third-party URL without touching any legal page, so URL review must include data files.
- The current static build proves route generation, not production headers, consent behavior in a real browser, or provider-side processing.

## What will break first under pressure

1. A deadline-driven analytics or marketing tag will be added before consent and provider review.
2. A contact form will be added by weakening or bypassing the static-boundary check, changing the data boundary without an updated notice.
3. A new video or press service will be embedded without an inventory entry, accessibility check, or opt-out explanation.

## What will quietly regress over 6–12 months

- Legal copy will drift from the actual providers, URLs, retention, or analytics state.
- The contact address, press-kit host, or third-party terms will change while the footer remains unchanged.
- GPC and consent behavior will be bypassed by a new client-side package.
- New gallery media or PDFs will lose accurate alt text, captions, tagging, or keyboard access.

## Prioritized remediation strategy

1. **Assign ownership and a change checklist.** Require privacy, accessibility, third-party, rights, and retention review for any new data flow or vendor; record the owner in this document or a linked project file.
2. **Create a provider/data-flow inventory.** Track each iframe, outbound provider, SDK, purpose, data categories, consent requirement, policy URL, and removal owner.
3. **Add CI guardrails.** Check new scripts/iframes/dependencies against the inventory, block known tracking packages without a reviewed consent path, and require legal-page updates when the public data boundary changes.
4. **Decide the contact data contract.** Keep `mailto:` or explicitly approve the server provider, retention, access, spam controls, and notice before changing the UI.
5. **Schedule quarterly review.** Recheck provider terms, GPC/consent behavior, media accessibility, press rights, and the accuracy of the legal pages.

## What not to fix yet

- Do not add a consent-management vendor, second analytics platform, or marketing pixel merely to appear more complete.
- Do not build a mock DSAR portal or promise jurisdiction-specific rights, response times, or governing law without confirmed operations and legal review.
- Do not replace the direct `mailto:` flow with Gmail SMTP until the provider and retention decision is approved.
- Do not add broad legal boilerplate or fake contact/organization details to fill space.

## Compliance durability score

**7/10 — low current data exposure, improved code-level durability, incomplete operational proof.** The static boundary, patched dependency graph, source-controlled headers, and verification command materially reduce current risk. The score is not higher because there is still no hosted CI enforcement, provider inventory, named owner, recurring review loop, or verified Vercel/media/Gmail operational configuration.
