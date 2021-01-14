FROM nginx

WORKDIR /app

RUN apt-get update

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN apt install git-all -y
RUN git clone https://github.com/rpgjs/rpgjs-documentation.git .
RUN npm install

EXPOSE 80

CMD bash -c "git pull && npm i && npm run build -- -d /usr/share/nginx/html && nginx -g 'daemon off;'"