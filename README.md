<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1VE_eCmeUlTqNGqE8EllIbxK_N_WL7cgR

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Regenerating gallery data

Images and their metadata now come directly from `public/*` instead of being hand-written.
`npm run dev` and `npm run build` automatically invoke `npm run generate:photo-data` beforehand (via `predev`/`prebuild`), so the JSON that powers `/photos` is regenerated before the app starts or before Vercel builds. Run `npm run generate:photo-data` manually (with `PHOTO_YEAR=2025` if you need a different default) whenever you want to regenerate without restarting the dev server or the build.
