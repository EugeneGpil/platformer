FROM nginx:1.20

ENV DEBIAN_FRONTEND=noninteractive

COPY run.sh run.sh
COPY default.conf /etc/nginx/conf.d/default.conf

RUN chmod +x run.sh && ./run.sh

