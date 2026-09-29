# Cash Clock V4 — separate demo release

Ben approved publication on September 29, 2026, at `/cash-clock/live-demo-v4`.
The original `/cash-clock/live-demo`, V2, V3 and marketing links are unchanged.

- Canonical source: `b7b2b415803d6ebe28ebdd47b61c2ecab1f98f22`, `codex/release-v4-demo-20260929` in `morriebrown/cashclock_2026_phaser_4`.
- Frozen artifact commit: `bd32eef` (full source SHA and dependency versions in artifact manifest).
- Build: `npm run build:web:partner-v4`; `partner-v1` standalone profile, animated opening enabled.
- Original V1 fixture SHA-256: `f2d0f54384923a06025a33ad7c44b99e6c0df0224747f7f1a8b4bd4ca6887f01`.
- No EQL wagering, settlement, mock balance footer or new-schema fixture. No PSD masters, portal, source maps or PHP mock shipped.
- 401 files / 32,631,699 bytes before manifest. These are all packaged orientations/retained assets, not the active-layout download size.
- Source artifact tree SHA-256: `e19e7a9d8e450d0f93e00f0e5ef9216dccbec53f04c66955a1bbf84629d927a9`.
- Website artifact tree SHA-256: `6ef3872bbdfa8ef4419c340bebc80d5b393a80087af1e396ffb57e4bfa82d96c` (401 files, 32,631,745 bytes excluding manifest).
- Only transformation: insert `<base href="/cash-clock/live-demo-v4/" />` into index.html. Reproducible via `node scripts/import-cash-clock-v4.mjs <frozen-dist>`. Manifest is unchanged from source.
- 83 tests pass; canonical EQL/web builds and frozen standalone build pass. Detailed desktop/mobile, lifecycle, effect and known-limit evidence is in the public artifact manifest and local game review notes.
- Known limitations: physical low-end phones not certified; eager asset loading remains heavy; historical mobile Hour prize multipliers await Joseph's approved table. No new math or EQL approval claimed.
- Rollback website commit: `4c2fd85c91444b70075313052714e5adcca47318`; previous production deployment: `hex-gamestudio-website-bzb9b41c7-bennoahbrown-projects.vercel.app`.

Deployment identifiers, production smoke tests and observed loading times are recorded in the local release receipt after publication. Do not replace the original demo link without Ben's further approval.
