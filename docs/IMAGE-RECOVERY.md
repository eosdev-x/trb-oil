# Image recovery — 2026-10-25

## What survived

The baseline commit `79b325b3766d1d4b72024bc68d9962fbb929e739` already contains the original hero, coiled tubing, cementing and nitrogen photographs, plus the TRB logo, in `src/assets/`. The application ignored those JPEGs and instead requested deleted Supabase Storage URLs. These four originals and the logo are unchanged, not generated replacements.

All nine photograph references now use Vite imports. The build fingerprints and bundles the files with the application: no Supabase database, Storage bucket, credentials, hotlinked image server, or runtime network dependency is needed. The missing `/vite.svg` favicon now uses the existing TRB logo.

## About page recovery

Five photographs were absent from all repository history. Matching subjects survive on TRB's [existing company About page](https://www.trb-oil.com/oilfield-services-about). Those images were downloaded and visually inspected, then stored in the repository. They occupy the same five sections as the missing photos. Since the deleted objects cannot be compared, these are **company-source replacements, not byte-for-byte recovery of the deleted Supabase files**.

| Local image in `src/assets/` | Placement and visible subject | Preparation |
|---|---|---|
| `trb_trucks_op.jpg` | About company profile; TRB service truck at a well site | Original source JPEG |
| `trb_equipment_op.jpg` | About company profile; TRB technician handling tools | Original source JPEG |
| `trb_overview_op.jpg` | Working with TRB; aerial facility view | Wix JPEG fit, maximum 1200×1200, quality 85 |
| `trb_tanks_op.jpg` | Markets; storage tanks | Wix JPEG fit, maximum 1200×1200, quality 85 |
| `trb_op_op.jpg` | Markets; crane lifting coiled tubing equipment | Original source JPEG |

The five files total 635,801 bytes. [image-sources.json](image-sources.json) records each source URL, exact downloaded rendition, SHA-256 and byte size. Date retrieved: 2026-10-25. None are AI generated, stock placeholders or newly fabricated branding.

## Provenance and rights

The retained photos/logo came from the user's fork and upstream repository. The added photos are TRB company imagery from its existing public website, reused here for restoration of the same company's website at the user's request. No explicit open-content license was found; no CC/public-domain license is asserted or granted by this repair. Copyright remains with the respective rights holders. This provenance record is not a claim of independent redistribution permission. No new third-party stock asset licenses or dependencies were introduced.

## Keeping images durable

Keep the source assets and this provenance record in version control. A backup must include the Git repository/assets and any future external storage separately: deleting a database must not remove the only copy of site media. Add future images with local imports, not storage object URLs. The generated `dist/` directory is rebuildable and is not the sole backup. Original unoptimized download copies used during investigation are outside the candidate at `/tmp/trb-recovery/` and are not required to build.
