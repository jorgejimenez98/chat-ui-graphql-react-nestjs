# Chat UI application (Nestjs, React-Vite, Graphql)

## Getting Started

First, build MongoDB Image
```bash
docker-compose up

```
Install server and client dependencies
```bash
cd ./client && yarn --save
cd ./server && pnpm install
```

Run application
```
```bash
cd ./server && pnpm start:dev
cd ./client && yarn dev
```

## With Makefile


This command will setup MongoDB image, install all dependencies and will run the two applications
```bash
make setup
```


* Open [http://localhost:3000](http://localhost:3000) with your browser to see the react client application.
* Open [http://localhost:3001](http://localhost:3001/graphql) with your browser to see the graphql server.
