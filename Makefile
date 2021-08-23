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
prod: init build/prod run/prod

# build and run in dev environment
.PHONY: dev
dev: init build/dev run/dev

include build/tasks/init.mk
include build/tasks/build.mk
include build/tasks/run.mk
include build/tasks/push.mk
include build/tasks/clean.mk
include build/tasks/lint.mk
