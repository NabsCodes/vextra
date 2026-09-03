#!/usr/bin/env bash
# Cloud Agent install script for the Vextra website.
# Runs after the repository is checked out. Must be idempotent and terminate.
set -euo pipefail

# Ensure the pinned pnpm from package.json "packageManager"/corepack is available.
corepack enable

# Refresh dependencies exactly from the committed lockfile.
pnpm install --frozen-lockfile

# Apply pending Drizzle migrations only when a database is configured.
# DATABASE_URL is injected as a Cloud Agent secret. When it is absent (e.g. an
# agent working on non-database changes), skip cleanly so install still succeeds.
if [ -n "${DATABASE_URL:-}" ]; then
  echo "[install] DATABASE_URL detected — applying Drizzle migrations."
  pnpm db:migrate
else
  echo "[install] DATABASE_URL not set — skipping database migrations."
fi
