ARG DOCKER_BASE_IMAGE
FROM $DOCKER_BASE_IMAGE AS dev

WORKDIR /source/services/web

# if stopped here, the container will start in dev mode with hot reloading
CMD ["npm", "run", "dev"]

FROM dev AS build

# generate the static files
RUN npm run build

FROM nginx:1.21.1-alpine AS final

RUN mkdir /app
COPY --from=build /source/services/web/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /source/services/web/dist/ app/

EXPOSE 8080
