FROM node:22.14-alpine AS build

WORKDIR /usr/src/app

RUN yarn

COPY src ./src
COPY package.json yarn.lock nest-cli.json tsconfig.json ./

RUN yarn add @nestjs/cli
RUN yarn build

FROM node:22.14-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/yarn.lock ./yarn.lock

EXPOSE 3000

CMD [ "node", "dist/main" ]