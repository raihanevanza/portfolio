# Demo Pijak

- Demo: https://portfolio-raihan-evanza.vercel.app/demo/pijak/
- Source: private repository raihanevanza/pijak. Portfolio only tracks the compiled browser demo, screenshots, tutorial, and project PDF.
- Gallery and tutorial: public/projects/pijak/. The video is WebM, recorded from the actual demo without narration; captions explain each step.
- PDF content: scripts/project-docs/pijak.mjs, rendered into Indonesian and English PDFs.

## Run and refresh

The committed demo is self-contained. A normal portfolio build needs no sibling repository, Supabase credentials, or server API.

Run npm ci and npm run dev, then visit /demo/pijak/. Both Vite and Vercel use a fallback for deep links within this prefix. Existing assets take precedence.

To refresh the bundle, install Pijak dependencies in the sibling pijak repository and run npm run demo:pijak -- ../pijak from the portfolio. This invokes the dedicated Pijak demo build, verifies the output, and copies only compiled browser files. source.json records the source commit. New source functionality remains in the private repository.

The screenshot/tutorial capture can be repeated with node scripts/capture-portfolio.mjs ../portfolio/public/projects/pijak from Pijak while the portfolio preview runs on port 4173. Re-render only the Pijak PDFs with npm run docs -- pijak; CHROME_PATH must point to an installed Chromium executable. Node 22 may need --experimental-strip-types for the documentation script.

## Demo behavior

The demo forces Supabase off, seeds three fictional collection entries plus illustrative activity history, and stores changes under the pijak-demo: prefix. Reset only clears that namespace. Purchase prices are sample values; unknown catalog prices remain unknown. No password or fake signed-in account is used. Plans do not add mileage until actual results are recorded.

The running workspace contains seven session types, a calendar, source-based shoe candidates, a three-way pace calculator, kilometer splits, weekly goals, weighted average pace, eight-week history, personal shoe rotation, and CSV/JSON exports. JSON import and watch/GPS integration are not available.

## Deployment

The portfolio's existing Git-to-Vercel integration deploys committed assets. vercel.json handles /demo/pijak and /demo/pijak/:path* without changing the portfolio root. Verify both the portfolio project card and a direct /demo/pijak/lari?tab=stats request after deployment.
