ARG DOCKER_BASE_IMAGE
ARG DATABASE_URL=postgresql://admin:admin@db:5432/default

FROM $DOCKER_BASE_IMAGE AS dev
ARG DATABASE_URL

WORKDIR /source/services/api

RUN echo DATABASE_URL="$DATABASE_URL" >> .env && \
	apk add dumb-init --no-cache

# if stopped here, the container will start in dev mode with hot reloading
CMD ["dumb-init", "npm", "run", "dev"]

FROM dev AS build

# generate the static files
RUN npm run build && \
	npm run special:drop-optional-dependencies

FROM node:14.17.4-alpine AS final
ARG DATABASE_URL

RUN mkdir /app
WORKDIR /app

# install production dependencies
COPY --from=build /source/services/api/package*.json /app/
RUN npm ci --production

# copy files
COPY --from=build /source/services/api/dist /app/dist
COPY --from=build /source/services/api/prisma /app/prisma
COPY --from=build /source/services/api/.prisma /app/.prisma

ENV DATABASE_URL=$DATABASE_URL
EXPOSE 8080

CMD ["node", "/app/dist/main.js"]
