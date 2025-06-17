#!/bin/sh

echo "Starting container with NODE_ENV=$NODE_ENV"

cd /app

if [ "$NODE_ENV" = "development" ]; then
  echo "Running in development mode..."
  exec npm run dev
else
  echo "Running in production mode..."
  npm run build
  exec pm2-runtime start ecosystem.config.js
fi
