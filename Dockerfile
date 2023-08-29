#stage 1
FROM node:16.16.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/Angular8-Employee-Docker /usr/share/nginx/html
