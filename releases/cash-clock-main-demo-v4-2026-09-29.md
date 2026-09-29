# Promote approved V4 to the main demo URL

Ben explicitly approved this route swap on September29,2026:

- `/cash-clock/live-demo`: approved V4 from former `/cash-clock/live-demo-v4`.
- `/cash-clock/v1-demo`: original demo formerly at `/cash-clock/live-demo`.
- Retire `/cash-clock/v2-demo`, `/cash-clock/live-demo-v2`, `/cash-clock/live-demo-v3`, and `/cash-clock/live-demo-v4`; these return404, not redirects. Their static subpaths are removed too.

No game rebuild, game-logic edit, fixture edit, or new prize-math claim. Existing marketing CTA already points to the canonical live-demo URL and stays unchanged.

## Provenance and transformations

Baseline website commit: `14253966956c29607ae6aee16888cc4033c9c43b`.
Approved V4 game source:`b7b2b415803d6ebe28ebdd47b61c2ecab1f98f22`; frozen artifact:`bd32eefe4b3386949dd62ff98c2250d995bb2e99`.

The complete426-file V1 and402-file V4 artifacts are moved intact. Each index.html changes only its base href. All other files, including original manifests, licenses, scenarios and JS bundles, remain byte-identical. The original V4 manifest intentionally retains its historical release-route approval; this document records Ben's subsequent main-route approval.

Source V1 tree SHA256 (including index):`075cb4a196a8b8f75462823f300a71e670a314a6d1110c56f8f57957500ccdee`.
Source V4 tree SHA256 (including manifest):`574ce9098851d9d406b7345e15b35f6fb62bbc010356385b26fb86370c889f4f`.

V2/V3 folders were moved to ignored local `.codex-context/retired-demo-builds/2026-09-29/`, excluded from deployment by `.vercelignore`. All prior builds are also recoverable from Git and the previous immutable deployment. No historical Vercel deployments are deleted.

## Verification and rollback

Run `node --test tests/cash-clock-demo-promotion.test.mjs`: exact-file Git-blob comparisons for every retained asset, exact base-href-only HTML comparisons, and checks for retired directories/rewrites and unchanged marketing target. Run `npm run build` before deployment.

Use a production-target candidate with `--skip-domain`, verify retained and retired routes, then promote. Save production HTTP/checksum, desktop/mobile browser and log results in the local release receipt. Existing V4 physical-device/math/accessibility limitations remain; this is a route promotion, not new certification.

Rollback deployment:`dpl_2G6LLwKLuAL6em96CwCrnGDfeovX` (`hex-gamestudio-website-5f208cun3-bennoahbrown-projects.vercel.app`). Rollback restores the old route arrangement atomically.

The earlier `scripts/import-cash-clock-v4.mjs` and V4 release note are historical records of the initial separate-route release; do not rerun that importer to resurrect a retired URL.
