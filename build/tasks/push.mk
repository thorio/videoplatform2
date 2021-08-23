# push images to registry
.PHONY: push
push: DOCKER_ENVIRONMENT=ci
push:
	$(call compose,push)
