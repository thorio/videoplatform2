# build docker images in the specified environment
.PHONY: build/%
build/%: build.base/% build.services/% ;

# build the base image
.PHONY: build.base/%
build.base/%: DOCKER_ENVIRONMENT=$*
build.base/%:
	$(call check_environment)
	docker build -f build/Dockerfile.base -t ${DOCKER_BASE_IMAGE} .
	docker image prune -f

# build the image of each service mentionen in the compose file
.PHONY: build.services/%
build.services/%: DOCKER_ENVIRONMENT=$*
build.services/%:
	$(call check_environment)
	$(call compose,build --build-arg DOCKER_BASE_IMAGE=${DOCKER_BASE_IMAGE})
	docker image prune -f
