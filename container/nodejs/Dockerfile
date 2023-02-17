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

#Chromium deps to build electron
USER root
RUN apt-get install\
      lib32z1\
      libasound2\
      libatk1.0-0\
      libatspi2.0-0\
      libc6\
      libcairo2\
      libcap2\
      libcgi-session-perl\
      libcups2\
      libdrm2\
      libegl1\
      libevdev2\
      libexpat1\
      libfontconfig1\
      libfreetype6\
      libgbm1\
      libglib2.0-0\
      libgl1\
      libgtk-3-0\
      libpam0g\
      libpango-1.0-0\
      libpangocairo-1.0-0\
      libpci3\
      libpcre3\
      libpixman-1-0\
      libspeechd2\
      libstdc++6\
      libsqlite3-0\
      libuuid1\
      libwayland-egl1\
      libwayland-egl1-mesa\
      libx11-6\
      libx11-xcb1\
      libxau6\
      libxcb1\
      libxcomposite1\
      libxcursor1\
      libxdamage1\
      libxdmcp6\
      libxext6\
      libxfixes3\
      libxi6\
      libxinerama1\
      libxrandr2\
      libxrender1\
      libxtst6\
      x11-utils\
      xvfb\
      zlib1g\
      libffi8\
      libpulse0\
      libbz2-1.0\
      libpng16-16\
      libnspr4\
      libnss3\
      libvulkan1\
      libinput10 -y

#more packages to build electron
RUN apt-get install rpm fakeroot -y

#enable user namespaces for electron-forge
USER root
RUN echo 'kernel.unprivileged_userns_clone=1' > /etc/sysctl.d/00-local-userns.conf