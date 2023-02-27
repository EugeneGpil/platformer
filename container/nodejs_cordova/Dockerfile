FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
USER root
ARG ID_USER=1000
ARG ID_GROUP=1000
ARG NODE_VERSION=16.17.0
COPY init.sh init.sh
RUN chmod +x init.sh && ./init.sh ${ID_USER} ${ID_GROUP} ${NODE_VERSION}

USER app
RUN npm install cordova

#USER root
#RUN
#    mkdir /opt/android-sdk &&\
#    cd /opt/android-sdk &&\
#    curl --output sdk-tools-linux.zip https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip &&\
#    unzip sdk-tools-linux.zip &&\
#    echo -ne "y" | ./tools/bin/sdkmanager --install 'build-tools;29.0.2' 'platform-tools' 'platforms;android-29' 'tools'