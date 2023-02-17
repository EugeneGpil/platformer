start:
	cd container &&\
	docker compose up --build --remove-orphans --detach &&\
	docker compose exec nodejs bash

node:
	cd container && docker compose exec nodejs bash

root-node:
	cd container && docker compose exec --user=root nodejs bash

stop:
	cd container && docker compose stop

fix-perms:
	sudo chown root:root front/node_modules/electron/dist/chrome-sandbox &&\
	sudo chmod 4755 front/node_modules/electron/dist/chrome-sandbox
