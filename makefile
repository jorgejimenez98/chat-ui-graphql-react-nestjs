start-front:
	cd ./client && yarn start

start-back:
	cd ./server && pnpm start:dev

lint-front:
	cd ./client && yarn lint

lint-back:
	cd ./server && pnpm lint


build-front:
	cd ./client && yarn build


lint-fix-front:
	cd ./client && yarn lint-fix

buid:
	docker-compose up -d

setup:
	- docker-compose up -d
	- cd ./server && pnpm install --save
	- cd ./client && yarn --save
	- cd ./server && pnpm start:dev
	- cd ./client && pnpm dev