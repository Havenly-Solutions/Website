# Folder Structure and Clone Flow

## Repository purpose
This repository is the public website for Havenly Solutions. It ships static content, marketing routes, and server-side form processing for public submissions.

## Clone flow
```text
git clone https://github.com/Havenly-Solutions/Website.git
cd Website
npm install
cp .env.example .env.local
npm run typecheck
npm run lint
npm run build
npm run dev
```

## Important directories
- app/: Next.js App Router pages, metadata, and route handlers
- components/: reusable UI and form components
- lib/: shared validation, API forwarding, site configuration, and content utilities
- public/images/: all static public assets, banners, and brand images
- .github/workflows/: CI workflow configuration
- responsive-audit/: generated audit artifacts
- reports/: machine-readable production readiness outputs

## What belongs where
- Pages and route handlers belong in app/
- Shared UI belongs in components/
- Business rules and validation belong in lib/
- Static images and brand assets belong in public/images/
- Temporary, generated, or IDE-local files must not be committed

## What must not go in the repo
- .env and .env.* credentials
- .idea/ editor state
- .agents/ local setup metadata
- node_modules and .next output
- logs, temporary files, caches, screenshots, or audit dumps meant only for local debugging

## Verified status
The actual repository still contains editor-generated files and local artifacts that must be reviewed before commit. The app structure itself is valid and buildable.
