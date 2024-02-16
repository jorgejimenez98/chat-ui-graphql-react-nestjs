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