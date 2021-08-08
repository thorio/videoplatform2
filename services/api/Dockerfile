ARG DOCKER_BASE_IMAGE
FROM $DOCKER_BASE_IMAGE AS dev

WORKDIR /source/services/api

# if stopped here, the container will start in dev mode with hot reloading
CMD ["npm", "run", "dev"]

FROM dev AS build

# generate the static files
RUN npm run build && \
	npm run special:drop-optional-dependencies

FROM node:14.17.4-alpine AS final

RUN mkdir /app
WORKDIR /app

# install production dependencies
COPY --from=build /source/services/api/package*.json /app
RUN npm ci --production

# copy dist files
COPY --from=build /source/services/api/dist /app/dist

EXPOSE 8080

CMD ["node", "/app/dist/main.js"]
