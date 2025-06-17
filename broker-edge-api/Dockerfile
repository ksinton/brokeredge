# api/Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy and set entrypoint
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install -g pm2 && npm install

# Copy app source
COPY . .

# Expose API port
EXPOSE 8000

# Use entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]

