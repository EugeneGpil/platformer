FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
USER root
ARG ID_USER=1000
ARG ID_GROUP=1000
ARG NODE_VERSION=16.17.0
COPY init.sh init.sh
RUN chmod +x init.sh && ./init.sh ${ID_USER} ${ID_GROUP} ${NODE_VERSION}

RUN echo "installing rpm, fakeroot to build electron forge\n" &&\
    apt-get install rpm fakeroot -y &&\
    \
    echo "installing wine, mono-complete to build electron forge for windows\n" &&\
    apt-get install wine mono-complete -y &&\
    \
    echo "installing wine32 too to build electron forge for windows\n" &&\
    dpkg --add-architecture i386 &&\
    apt-get update &&\
    apt-get install wine32 -y