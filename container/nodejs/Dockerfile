FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

#create user and group. Install dependencies
USER root
ARG ID_USER=1000
ARG ID_GROUP=1000
RUN groupadd -g ${ID_GROUP} app &&\
    useradd -u ${ID_USER} -m app -g app &&\
    \
    apt-get update &&\
    \
    echo "installing common dependencies\n" &&\
    apt-get install curl nano git -y &&\
    \
    echo "installing rpm, fakeroot to build electron forge\n" &&\
    apt-get install rpm fakeroot -y &&\
    \
    echo "installing wine, mono-complete to build electron forge for windows\n" &&\
    apt-get install wine mono-complete -y &&\
    \
    echo "installing wine32 too to build electron forge for windows\n" &&\
    dpkg --add-architecture i386 &&\
    apt-get update &&\
    apt-get install wine32 -y

#install nodejs via nvm
#add nvm.sh to .bashrc for app user
USER app
ARG NODE_VERSION=16.17.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash &&\
    export NVM_DIR="$HOME/.nvm" &&\
    . $NVM_DIR/nvm.sh &&\
    nvm install ${NODE_VERSION} &&\
    echo "\n\
        source ~/.nvm/nvm.sh\n\
    " >> ~/.bashrc

#add path var node, now can use npm
ARG NODE_VERSION=16.17.0
ENV PATH /home/app/.nvm/versions/node/v${NODE_VERSION}/bin:${PATH}

#add nvm.sh to .bashrc for root user
USER root
RUN echo "\n\
        source /home/app/.nvm/nvm.sh\n\
    " >> ~/.bashrc

#installing quasar. Installing cordova to build mobile apps
USER app
RUN	npm install -g @quasar/cli cordova
