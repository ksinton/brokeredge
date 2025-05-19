FROM node:20-alpine

WORKDIR /app

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

COPY package*.json ./
RUN npm install

# App code will be mounted into /app/app during development
COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]


