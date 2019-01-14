FROM debian:jessie
RUN apt-get update && apt-get install -y \
    nginx
RUN mkdir /var/run/sshd
COPY nginx.conf /etc/nginx/nginx.conf
COPY sites-available/ /etc/nginx/sites-available/
RUN echo "upstream php-upstream { server php:9000; }" > /etc/nginx/conf.d/upstream.conf
RUN usermod -u 1000 www-data
EXPOSE 80
EXPOSE 81
