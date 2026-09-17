#!/usr/bin/env bash
# Build and publish the site to the production server.
#
#   ./deploy.sh                 # deploys to the default host below
#   SERVER=root@1.2.3.4 ./deploy.sh
#
# Auth uses your SSH key/agent. To avoid typing the root password every time:
#   ssh-copy-id root@84.54.12.38
set -euo pipefail

SERVER="${SERVER:-root@84.54.12.38}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/aqualive}"

cd "$(dirname "$0")"

echo "==> Building"
npm run build

echo "==> Uploading to $SERVER:$REMOTE_DIR"
# --delete removes files from previous builds (old hashed assets)
rsync -az --delete dist/ "$SERVER:$REMOTE_DIR/"

echo "==> Fixing ownership and reloading nginx"
ssh "$SERVER" "chown -R www-data:www-data $REMOTE_DIR && nginx -t && systemctl reload nginx"

echo "==> Done: https://aqualive.kg"
