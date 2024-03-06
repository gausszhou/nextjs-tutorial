FROM node:latest

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install pnpm -g
RUN pnpm install
COPY . .

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
