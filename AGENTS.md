# Clean Slate site direction

## Brand source of truth

- Treat the supplied Clean Slate poster-font guide and official poster as the visual source of truth.
- Use `public/ProgressPersonalUse-EaJdz.ttf` as the display face for titles, names, compact labels, and the wordmark. It is a stand-in for the guide's Alternate Gothic No. 1 and Balgin Condensed treatments.
- Keep readable body copy in the inherited `font-sans` stack: Verdana, Inter, sans-serif.
- Core palette: near-black, white, guide light gray `#f7f7f6`, and desaturated slate-teal sampled from the poster. Do not introduce bright yellow or unrelated accent colors.
- The tone is restrained, tense, cinematic, direct, and human. Let still photography and condensed type carry the identity.

## UI rules

- Keep the site mobile-first and vertically compact. Prefer `py-12 md:py-16` section rhythm over tall marketing-page spacing.
- Use small corner radii, normally `rounded-md`. Avoid pills and oversized rounded cards except for functional circular controls.
- Navigation items must have clear button-like hover and active surfaces, visible focus, and at least a 44px mobile target.
- Use very few borders. Prefer spacing, tonal surfaces, and image composition for grouping.
- Homepage content should prioritize the film, logline, story imagery, festival recognition, and a clear next action. Keep production metadata on the film page behind a compact disclosure.
- Galleries must show the full image without cropping and should not display editorial captions. Keep accurate alt text.
- Contact is currently a direct `mailto:` flow to `CleanSlateProduction@gmail.com`. Keep the dormant server email action available for a future approved provider, but do not wire the live UI to Gmail SMTP.
- Do not add mock copy, media, awards, or release details.

