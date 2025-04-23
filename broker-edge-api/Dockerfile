# api/Dockerfile
FROM node:20-alpine

# Create and set working directory
WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the API port
EXPOSE 8000

# Use the dev script (tsnd for TypeScript live reload)
CMD ["npm", "run", "dev"]
