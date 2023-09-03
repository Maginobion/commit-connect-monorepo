FROM node:18-alpine as base

WORKDIR /root/monorepo
RUN npm install -g pnpm

FROM base as build

COPY ./pnpm-lock.yaml .
RUN pnpm fetch
COPY . .
RUN pnpm install -r --offline
RUN pnpm run build

FROM node:18-alpine as production

WORKDIR /app

COPY ./pnpm-lock.yaml ./package.json ./pnpm-workspace.yaml ./

COPY --from=build /root/monorepo/apps/api/dist apps/api/dist
COPY --from=build /root/monorepo/apps/api/node_modules apps/api/node_modules
COPY --from=build /root/monorepo/apps/client/dist apps/client/dist 
COPY --from=build /root/monorepo/apps/client/node_modules apps/client/node_modules
COPY --from=build /root/monorepo/node_modules node_modules

EXPOSE 3000
CMD ["node", "apps/api/dist/main.js"]