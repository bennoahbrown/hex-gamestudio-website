# Cash Clock V5 — separate approved demo

Ben explicitly approved the reviewed combined V5 on September 30, 2026 for `/cash-clock/v5-demo`. Existing `/cash-clock/live-demo` (V4), `/cash-clock/v1-demo`, marketing links, and retired V2/V3/V4 routes stay unchanged.

Website baseline: `1c3e36da79935903ca79e32e0a20bb7c4cae2fd3`, including the latest production contact-form fix. Branch: `codex/release-v5-demo-20260930`.

Canonical source: `https://github.com/morriebrown/cashclock_2026_phaser_4`, branch `codex/release-v5-demo-20260930`, commit `1055c98ac5611349817460ba0c8f9cac8b57f254`. Release identifier: `cash-clock-v5-2026-09-30`.

The exact accepted local review artifact is frozen, not rebuilt: 341 files / 25,324,023 bytes excluding release metadata, tree SHA256 `d3412e26d904501242f9da52d9ff3515fee856ce5ff956821d29cbc03ec6175b`. Its 78 compiled runtime-input hashes match the committed source. The complete source/fixture/dependency/QA/approval manifest is included as `public/cash-clock/v5-demo/cash-clock-v5-release-manifest.json`.

Import command: `node scripts/import-cash-clock-v5.mjs <frozen-V5-build>`. Only index.html receives a base href `/cash-clock/v5-demo/` and title `Cash Clock V5 Demo`. JavaScript, CSS, artwork, audio, fixture, and source manifest are unchanged. No game math or EQL/wager/settlement integration is introduced. Frozen original V1 fixture SHA256 remains `f2d0f54384923a06025a33ad7c44b99e6c0df0224747f7f1a8b4bd4ca6887f01`.

126 canonical tests and full file/dependency checks passed. Website verification: `node --test tests/cash-clock-demo-promotion.test.mjs tests/cash-clock-v5.test.mjs`, then `npm run build`. Existing retained demos are checked against all historical Git blobs; V5 is checked against every frozen file hash. Public copy/prize claims are unchanged; historical tables are not final approved math. Physical-phone performance, exhaustive scenario playback and full accessibility certification are not claimed.

Deploy a production-target candidate using `vercel deploy --prod --skip-domain`, inspect hosted files and desktop/mobile views, then promote that same deployment. Production authorization is Ben's explicit current request. Record URLs, full website commit, checksum, route/cache/browser checks, limitations and final outcome in the local release receipt and return to the Cash Clock project.

Known-good rollback: `dpl_GeXa1hvTGSSuzjRsHvGKuR2WoS4R`, `https://hex-gamestudio-website-bzadkdn1s-bennoahbrown-projects.vercel.app`, website commit `1c3e36da79935903ca79e32e0a20bb7c4cae2fd3`. Promotion of that deployment restores the pre-V5 site atomically without deleting release history.
