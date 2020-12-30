FROM node:14 as build
WORKDIR /app

RUN git clone https://github.com/rpgjs/rpgjs-documentation.git .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/docs/.vuepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]