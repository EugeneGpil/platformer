define FUNC
    cd container &&\
	cp base/nginx/* nginx_dev/ &&\
	cp base/nginx/* nginx_prod/ &&\
	cp base/nginx/* nginx_electron/ &&\
	cp base/nodejs/* nodejs_web &&\
	cp base/nodejs/* nodejs_electron &&\
	cp base/nodejs/* nodejs_cordova
endef

start-dev:
	$(call FUNC) &&\
	docker compose up nodejs_web nginx_dev --build --remove-orphans --detach &&\
	docker compose exec nodejs_web bash

start-electron::
	$(call FUNC) &&\
	docker compose up nodejs_electron nginx_electron --build --remove-orphans --detach &&\
	docker compose exec nodejs_electron bash

start-cordova::
	$(call FUNC) &&\
	docker compose up nodejs_cordova --build --remove-orphans --detach &&\
	docker compose exec nodejs_cordova bash

start-prod::
	$(call FUNC) &&\
	docker compose up nodejs_web nginx_prod --build --remove-orphans --detach &&\
	docker compose exec nodejs bash

node-web:
	cd container && docker compose exec nodejs_web bash

root-node-web:
	cd container && docker compose exec --user=root nodejs_web bash

node-electron:
	cd container && docker compose exec nodejs_electron bash

root-node-electron:
	cd container && docker compose exec --user=root nodejs_electron bash

node-cordova:
	cd container && docker compose exec nodejs_cordova bash

root-node-cordova:
	cd container && docker compose exec --user=root nodejs_cordova bash

stop:
	cd container && docker compose stop

fix-perm:
	sudo chown root:root front/node_modules/electron/dist/chrome-sandbox &&\
	sudo chmod 4755 front/node_modules/electron/dist/chrome-sandbox
