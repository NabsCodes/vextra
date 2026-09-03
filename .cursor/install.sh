#!/usr/bin/env bash
# Cloud Agent install script for the Vextra website.
# Runs after the repository is checked out. Must be idempotent and terminate.
set -euo pipefail

# Ensure the pinned pnpm from package.json "packageManager"/corepack is available.
corepack enable

# Refresh dependencies exactly from the committed lockfile.
pnpm install --frozen-lockfile

# Database migrations are intentionally NOT run here. The injected DATABASE_URL
# may point at a shared database, and migrations are an explicit developer action
# (`pnpm db:migrate`), not per-boot setup.
