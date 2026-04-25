
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM image-ssh-base

COPY --from=build-stage /app/dist /var/www/html

EXPOSE 80

COPY nginx.conf /etc/nginx/sites-available/default

RUN ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

CMD service ssh start && nginx -g 'daemon off;'