FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
USER root
ARG ID_USER=1000
ARG ID_GROUP=1000
ARG NODE_VERSION=16.17.0
COPY init.sh init.sh
RUN chmod +x init.sh && ./init.sh ${ID_USER} ${ID_GROUP} ${NODE_VERSION}

USER app
ARG NODE_VERSION=16.17.0
ARG BUILD_TOOLS_VER=30.0.3
ARG GRADLE_VER=7.4.2
#workdir for nvm to work properly
WORKDIR /usr/app
RUN echo "making nvm command available. Need nvm to make npm available" &&\
        export NVM_DIR="$HOME/.nvm" &&\
        [ -s "$NVM_DIR/nvm.sh" ] &&\
        \. "$NVM_DIR/nvm.sh" &&\
    \
    echo "setting up nodejs version. Now can use npm" &&\
        nvm use ${NODE_VERSION} &&\
    \
    npm install -g cordova

USER root
RUN apt-get install openjdk-11-jdk wget unzip -y &&\
    \
    echo "Get last commandlinetools in bottom of page https://developer.android.com/studio/index.html" &&\
    wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip &&\
    \
    unzip commandlinetools-linux-9477386_latest.zip -d commandlinetools &&\
    mv commandlinetools /home/app &&\
    \
    echo "Need to add 'latest' dir before 'bin', or will get an error" &&\
    echo "Now       '/home/app/commandlinetools/cmdline-tools/bin'" &&\
    echo "Should be '/home/app/commandlinetools/cmdline-tools/latest/bin'" &&\
    cd /home/app/commandlinetools &&\
    mkdir cmdline-tools2 &&\
    mv cmdline-tools cmdline-tools2 &&\
    mv cmdline-tools2/ cmdline-tools &&\
    cd cmdline-tools &&\
    mv cmdline-tools latest &&\
    \
    echo "set ENV vars for Dockerfile to be able to use sdkmanager now" &&\
    export ANDROID_HOME=/home/app/commandlinetools &&\
    export ANDROID_SDK_ROOT=$ANDROID_HOME &&\
    export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin &&\
    \
    echo "accept licenses" &&\
    yes | sdkmanager --licenses &&\
    \
    echo "requirements for cordova v10" &&\
    echo "requirements: https://cordova.apache.org/docs/en/11.x/guide/platforms/android/" &&\
    echo "also command 'cordova requirements' in 'front/src-cordova' folder of project shows some requirements" &&\
    yes | sdkmanager "platform-tools" "platforms;android-22" "build-tools;${BUILD_TOOLS_VER}" &&\
    \
    echo "installing gradle" &&\
    echo "what version to install: https://developer.android.com/studio/releases/gradle-plugin.html" &&\
    echo "gradle releases: https://gradle.org/releases/" &&\
    cd /home/app &&\
    wget https://services.gradle.org/distributions/gradle-${GRADLE_VER}-all.zip &&\
    unzip gradle-${GRADLE_VER}-all.zip -d gradle &&\
    cd gradle

#setting ENV to use sdkmanager after starting
ENV ANDROID_HOME=/home/app/commandlinetools
ENV ANDROID_SDK_ROOT=$ANDROID_HOME
ENV GRADLE_HOME=/home/app/gradle/gradle-${GRADLE_VER}/bin
ENV PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
ENV PATH=$PATH:$GRADLE_HOME
ENV PATH=$PATH:$ANDROID_HOME/tools/bin
ENV PATH=$PATH:$ANDROID_HOME/build-tools/${BUILD_TOOLS_VER}
ENV PATH=$PATH:$ANDROID_HOME/platform-tools
ENV PATH=$PATH:$ANDROID_HOME/emulator
ENV PATH=$PATH:$ANDROID_HOME/tools
