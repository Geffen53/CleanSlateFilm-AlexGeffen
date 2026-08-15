# Compliance drift and future risk audit

**Review date:** August 15, 2026  
**Scope:** the Clean Slate public Next.js site, repository workflow, contact path, browser privacy controls, embedded media, and legal-information surfaces.  
**Purpose:** identify how a low-data static site could regress as new code, vendors, or marketing requests are introduced. This is an engineering risk review, not legal advice or a certification.

## Executive drift risk summary

The site has a relatively small current privacy footprint: there are no accounts, payments, user profiles, advertising pixels, or active analytics SDKs in the repository. Contact is presented as a `mailto:` flow, and the public legal links are now complete enough to explain the current site behavior.

The durable risk is process, not today’s collection volume. There is no repository CI workflow, compliance-sensitive change gate, third-party inventory, owner, retention schedule, or documented release checklist. A future contributor can add a script, analytics SDK, form submission, or marketing tag faster than the privacy policy can be updated. The dormant Gmail server action is another clear path for the live contact boundary to change without a corresponding provider and retention review.

## Critical drift vectors

1. **Consent can become decorative.** The consent state exists, but no inventory binds a provider or data flow to the `analytics` choice. A future SDK could be loaded before consent or without honoring GPC.
2. **Third-party embeds can expand silently.** The video page loads a YouTube iframe, while external media and social URLs are spread across data and page components. There is no allowlist or review record for new origins.
3. **The contact boundary can change by convenience.** `app/actions/contact.ts` contains a Gmail/Nodemailer server action, while the live UI is intentionally `mailto:`. Wiring that action would create server-side personal-data processing, credentials, logs, and retention obligations.
4. **Release controls are mostly social.** No checked-in CI, code-owner rule, pull-request template, or automated policy check requires a privacy/accessibility review.

## High-risk process failures

- No automated check detects new `next/script`, iframe origins, tracking packages, server-side form persistence, or changes to legal routes.
- No named owner is recorded for privacy, accessibility, third-party vendors, rights permissions, or inquiry retention.
- The repository guidance correctly says not to wire Gmail SMTP, but that rule is easy to miss and is not enforced by code.
- `next.config.mjs` declares media caching but no CSP, permissions policy, or other security-header baseline. Production hosting settings are not represented in this repository.
- There is no test script or focused compliance test suite; build success does not prove consent ordering, GPC behavior, provider behavior, or rights accuracy.

## Medium and low-risk process gaps

- The README contains generic AI Studio/photo-generation directions that do not document the current legal, consent, or deployment model.
- Retention of inquiry email, hosting logs, and provider records is described qualitatively but has no owner or review interval.
- The consent utility has a broad `clearAllCookies()` helper that clears all local storage; it is currently unused, but a future consumer could erase unrelated application state.
- There is no recurring accessibility review or third-party PDF/player check.

## Change pathway analysis

| Pathway | Current boundary | Likely drift | Required guardrail |
| --- | --- | --- | --- |
| Marketing or growth request | No marketing scripts in source | A copied tag or pixel bypasses consent | Review all new scripts and origins; fail CI on unapproved additions |
| Video or social promotion | YouTube iframe plus external links | New provider receives identifiers or changes terms | Maintain a provider inventory and privacy/terms link per provider |
| Contact improvement | Live `mailto:`; dormant server action exists | Form data is stored or sent through Gmail without notice | Provider, retention, security, and policy review before wiring |
| Experiment or feature flag | No feature-flag framework found | Temporary tracking or copy becomes permanent | Expiration owner and removal date for every experiment |
| Emergency release | No checked-in release gate | Hotfix ships without legal/accessibility review | Minimum two-person review or documented exception owner |

## Documentation and ownership gaps

`AGENTS.md` is the strongest current control: it preserves the direct-mail contact contract, the no-Gmail-UI rule, and accessibility/brand guidance. It does not name a policy owner, define a vendor register, or explain what must be reviewed when data flows change. The new legal pages and this audit create a discoverable baseline, but they still need an accountable human owner and a review date.

## Tooling and script-injection risks

The repository currently has no `next/script`, analytics package, pixel, or tag-manager usage. The meaningful external surfaces are the YouTube embed, outbound Instagram/IMDb/consultant links, the remote press-kit host, the email application, `next-themes`, and hosting/delivery infrastructure. A new script or iframe would be high-impact because there is no centralized allowlist, CSP, consent loader, or automated diff check.

## Cultural and incentive misalignments

The easiest path is currently the least documented path: paste a vendor snippet, add a tracking dependency, or connect the existing Gmail action. Marketing deadlines and “temporary” experiments would reward speed over review because the repository has no friction at those boundaries. The site should make the safe path easier than the shortcut through a short checklist and an automated inventory check.

## Unknown-unknown observations

- Vercel project settings, DNS/CDN logs, email-provider retention, and YouTube configuration are outside the repository and therefore outside this evidence set.
- A future press-kit replacement could introduce an inaccessible PDF or new embedded viewer without a source diff that looks privacy-sensitive.
- A change to `data/film.ts` can alter a third-party URL without touching any legal page, so URL review must include data files.
- The current static build proves route generation, not production headers, consent behavior in a real browser, or provider-side processing.

## What will break first under pressure

1. A deadline-driven analytics or marketing tag will be added before consent and provider review.
2. A contact form will be wired to the existing server action, changing the data boundary without an updated notice.
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

- Do not add a consent-management vendor, account system, analytics platform, or marketing pixel merely to appear more complete.
- Do not build a mock DSAR portal or promise jurisdiction-specific rights, response times, or governing law without confirmed operations and legal review.
- Do not replace the direct `mailto:` flow with Gmail SMTP until the provider and retention decision is approved.
- Do not add broad legal boilerplate or fake contact/organization details to fill space.

## Compliance durability score

**5/10 — low current data exposure, weak future-change durability.** The public site is simple and the current legal pages now describe the real contact, storage, media, GPC, rights, and accessibility boundaries. The score stays near the middle because the safeguards depend on contributor memory: there is no CI enforcement, provider inventory, named owner, production-header baseline, or recurring review loop. The highest-value next step is adding those controls before the next marketing, analytics, or contact-system change.

