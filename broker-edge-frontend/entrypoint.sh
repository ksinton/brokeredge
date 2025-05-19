#!/bin/sh

echo "Starting container with NODE_ENV=$NODE_ENV"

cd /app/app  # go into the mounted code directory

if [ "$NODE_ENV" = "development" ]; then
  echo "Running in development mode..."
  exec npm run dev
else
  echo "Running in production mode..."
  npm run build
  exec npm start
fi
