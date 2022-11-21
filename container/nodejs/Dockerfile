FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

#create user and group. Install common dependencies
USER root
ARG ID_USER=1000
ARG ID_GROUP=1000
RUN groupadd -g ${ID_GROUP} app &&\
    useradd -u ${ID_USER} -m app -g app &&\
    apt-get update &&\
    apt-get install \
      curl\
      nano\
      git -y

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
#enable corepack and install xsel to be able to use yarn
USER root
RUN echo "\n\
        source /home/app/.nvm/nvm.sh\n\
    " >> ~/.bashrc &&\
		corepack enable &&\
    apt-get install xsel -y

#installing quasar
USER app
RUN	npm install -g @quasar/cli
