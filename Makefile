include build/definitions.mk

SHELL := /bin/bash
ENVIRONMENTS = dev prod
COMPOSE_PROJECT_BASE := localvideoplatform2
environment ?= dev
logs ?= web

# build and run in prod environment, default target
.PHONY: prod
prod: init build\:prod run\:prod

# build and run in dev environment
.PHONY: dev
dev: init build\:dev run\:dev

# (re)-initialize after a clone or clean
.PHONY: init
init:
	npx lerna --loglevel silent bootstrap --ci

# build docker images in the specified environment
.PHONY: build\:%
build\:%: environment=$*
build\:%:
	$(call check_environment)
	docker build -f build/Dockerfile.base -t ${COMPOSE_PROJECT_BASE}base:latest .
	$(call compose,build)
	docker image prune -f

# start all services in the specified environment
.PHONY: run\:%
run\:%: environment=$*
run\:%:
	$(call check_environment)
	$(call compose,up --remove-orphans -d)
	$(call compose,logs -f); \
	$(call compose,down)

# clean up any files that were automatically created
.PHONY: clean
clean:
    # node
	-npx lerna run --loglevel silent clean -- --silent > /dev/null
	npx lerna clean --loglevel silent -y
	rm -rf node_modules

    # docker
	docker image rm -f ${COMPOSE_PROJECT_BASE}base:latest > /dev/null 2>&1
	docker image prune -f > /dev/null
	@$(call compose-foreach-print,environment,${ENVIRONMENTS},--log-level ERROR down --rmi local --volumes --remove-orphans)
	docker builder prune -af > /dev/null

# run eslint
.PHONY: lint
lint:
	@$(call run-lint)

# run eslint and fix all fixable problems
.PHONY: lint\:fix
lint\:fix:
	@$(call run-lint,--fix)
