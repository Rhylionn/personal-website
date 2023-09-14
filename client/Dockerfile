FROM nginx:latest

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/thomasbd.conf /etc/nginx/conf.d/thomasbd.conf
COPY dist /usr/share/nginx/html

EXPOSE 80/tcp
EXPOSE 443/tcp

CMD ["nginx", "-g", "daemon off;"]