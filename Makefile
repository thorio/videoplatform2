include build/definitions.mk

SHELL := /bin/bash
ENVIRONMENTS := dev prod ci
export DOCKER_IMAGE_BASENAME := videoplatform2
export DOCKER_ENVIRONMENT := error # set by recipe
export DOCKER_IMAGE_TAG_CI := latest
DOCKER_BASE_IMAGE := videoplatform2/base:dev
COMPOSE_PROJECT_BASE := ${DOCKER_IMAGE_BASENAME}

# build and run in prod environment, default target
.PHONY: prod
prod: init build\:prod run\:prod

# build and run in dev environment
.PHONY: dev
dev: init build\:dev run\:dev

# (re)-initialize after a clone or clean
.PHONY: init
init:
	npm ci
	npx lerna --loglevel silent bootstrap --ci

# build docker images in the specified environment
.PHONY: build\:%
build\:%: DOCKER_ENVIRONMENT=$*
build\:%:
	$(call check_environment)
	docker build -f build/Dockerfile.base -t ${DOCKER_BASE_IMAGE} .
	$(call compose,build --build-arg DOCKER_BASE_IMAGE=${DOCKER_BASE_IMAGE})
	docker image prune -f

# start all services in the specified environment
.PHONY: run\:%
run\:%: DOCKER_ENVIRONMENT=$*
run\:%:
	$(call check_environment)
	$(call compose,up --remove-orphans -d)
	$(call compose,logs -f); \
	$(call compose,down)

# push images to registry
.PHONY: push
push: DOCKER_ENVIRONMENT=ci
push:
	$(call compose,push)

# clean up any files that were automatically created
.PHONY: clean
clean:
    # node
	-npx lerna run --loglevel silent clean -- --silent > /dev/null
	npx lerna clean --loglevel silent -y
	rm -rf node_modules

    # docker
	docker image rm -f ${DOCKER_BASE_IMAGE} > /dev/null 2>&1
	docker image prune -f > /dev/null
	@$(call compose_foreach_print,DOCKER_ENVIRONMENT,${ENVIRONMENTS},--log-level ERROR down --rmi all --volumes --remove-orphans)
	docker builder prune -af > /dev/null

# run linters
.PHONY: lint
lint:
	@! find . $(call find_names,node_modules, dist .eslintcache .nuxt .prisma) -prune -o -type f -exec file "{}" ";" | grep CRLF || (echo -e "\nCRLF found!\n" && false)
	@lerna exec --loglevel silent --stream --no-prefix --no-bail -- npm run --silent --if-present lint -- --color ${ESLINT_ARGS}

# run linters and fix all fixable problems
.PHONY: lint\:fix
lint\:fix: ESLINT_ARGS=--fix
lint\:fix: lint
