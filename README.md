## Build and Run Project
- nvm use (to use automatically node 18V)
- npm install
- npm run build
- npm run start
- docker run --restart=always -dp 3000:3000 standard-api:1.0

## Run in development
Project uses node version 18
- nvm use (to use automatically node 18V)
- npm install
- npm run dev
- Request on route http://localhost:3000/alternative
- should get a html response saying "This is alternative route"
