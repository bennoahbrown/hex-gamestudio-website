# Cash Clock V5 — October 1, 2026 update

Ben requested publishing the exact reviewed selector-roll build at `/cash-clock/v5-demo`, after its known moving-digit clipping issue was reported. This release does not correct that issue or alter game source, math, fixtures or other demo routes.

Release identifier: `cash-clock-v5-2026-10-01`. Website branch: `codex/release-v5-demo-20261001`, based on production commit `c98da67764fa6c3645c9784a5595ad8a0f200b80`.

Canonical source snapshot: `368455fc693ef9b211457e54a6294a007d13dc19`; manifest commit: `6bf07ecd5818c719da7672e50bb754ebbbef3dd6`; canonical release branch has the same name. A private index preserved the designers' active checkout, working files and staging area. All 97 compiled input hashes match the snapshot commit.

The game was frozen without rebuilding: 429 files / 41,575,224 bytes, tree SHA256 `6daf6ca6823609ecf4a0dee76cc5b869dcc679e6ce04a1a861bfd945ef15b542`. Review-report SHA256: `b20ba04d6cb3bb6c98bb5f65cd4b653225d10e590c8bb0d1c904707ecda51a1c`. The release manifest ships with the artifact. Import changes only the HTML base path and browser title. The previous V5 directory is retained in ignored local release context and in Git history.

Import: `node scripts/import-cash-clock-v5.mjs <frozen-build> --replace=cash-clock-v5-2026-09-30`. Run website tests and production build, then stage a production-target deployment with `vercel deploy --prod --skip-domain`, verify protected hosted hashes/routes, and promote the same candidate.

Known P2: Phaser 4 WebGL ignores the selector's nine GeometryMask `setMask` calls; rolling digits can cross the gold frame/arrows on desktop and mobile. Settled values and tap-to-grid work. Root game suite: 154/154 passing; read-only package verifier: 429 hashes/dependencies/fixture passing. No claim of clean browser warnings, complete visual alignment, physical-phone performance or full accessibility certification. The historical Autoplay image-readiness concern remains open. No new Paul architectural or Joseph math approval is claimed; this remains a standalone demo with the unchanged curated fixture, not production EQL wagering/settlement.

Preserve current `/cash-clock/live-demo`, `/cash-clock/v1-demo`, contact implementation, marketing copy and retired routes. Public displayed prize tables remain historical, not newly endorsed final odds/math.

Rollback deployment: `dpl_UkgxQgfLBLRUi3wTXcyqp8Fjx1vY`, `https://hex-gamestudio-website-g6lcv6nuo-bennoahbrown-projects.vercel.app`; website commit `c98da67764fa6c3645c9784a5595ad8a0f200b80`. This was independently confirmed as the live production deployment before import. The local release receipt records candidate/promotion IDs and hosted checks.
