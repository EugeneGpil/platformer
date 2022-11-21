ARG NGINX_VERSION=1.20
FROM nginx:${NGINX_VERSION}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update &&\
    apt-get install nano -y &&\
    mkdir /var/www &&\
    touch /var/www/.barshrc &&\
    echo "umask 012\n" >> /var/www/.bashrc

COPY default.conf /etc/nginx/conf.d/default.conf
