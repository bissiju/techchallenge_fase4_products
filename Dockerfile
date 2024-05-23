FROM node:16-alpine

WORKDIR /app

COPY package.json tsconfig.json ./
RUN npm install 2>/dev/null

COPY src ./src

RUN npm run build

CMD [ "node", "dist/index.js" ]