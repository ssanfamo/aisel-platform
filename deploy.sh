#!/bin/bash

echo "🚀 Starting deployment..."

# Stop existing containers cleanly
docker compose down

# Remove any orphan/old containers (extra safety)
docker rm -f aisel-web aisel-api 2>/dev/null

# Pull latest code
git pull

# Build fresh images (no cache avoids stale bugs)
docker compose build --no-cache

# Start containers
docker compose up -d

# Show running containers
docker ps

echo "✅ Deployment complete"
