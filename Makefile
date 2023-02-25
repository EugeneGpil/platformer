start-dev:
	cd container &&\
	cp base/nginx/run.sh nginx_dev/ &&\
	docker compose up nodejs nginx_dev --build --remove-orphans --detach &&\
	docker compose exec nodejs bash

start-electron:
	cd container &&\
	cp base/nginx/run.sh nginx_electron/ &&\
	docker compose up nodejs nginx_electron --build --remove-orphans --detach &&\
	docker compose exec nodejs bash

start-prod:
	cd container &&\
	cp base/nginx/run.sh nginx_prod/ &&\
	docker compose up nodejs nginx_prod --build --remove-orphans --detach &&\
	docker compose exec nodejs bash

start-node:
	cd container &&\
	docker compose up nodejs --build --remove-orphans --detach &&\
	docker compose exec nodejs bash

node:
	cd container && docker compose exec nodejs bash

root-node:
	cd container && docker compose exec --user=root nodejs bash

stop:
	cd container && docker compose stop

fix-perm:
	sudo chown root:root front/node_modules/electron/dist/chrome-sandbox &&\
	sudo chmod 4755 front/node_modules/electron/dist/chrome-sandbox
