# clean up packages, compilation artifacts, caches and application data
.PHONY: clean
clean:: clean.env clean.cache clean.data

# remove node_modules and run clean scripts in all packages
.PHONY: clean.env
clean.env:
	npx lerna run --loglevel silent clean > /dev/null
	npx lerna clean --loglevel silent -y
	rm -rf node_modules

# drop docker images and build cache
.PHONY: clean.cache
clean.cache:
	docker image rm -f ${DOCKER_BASE_IMAGE} > /dev/null 2>&1
	docker image prune -f > /dev/null
	@$(call compose_foreach_print,DOCKER_ENVIRONMENT,${ENVIRONMENTS},--log-level ERROR down --rmi all --remove-orphans)
	docker builder prune -af > /dev/null

# drop docker volumes
.PHONY: clean.data
clean.data:
	@$(call compose_foreach_print,DOCKER_ENVIRONMENT,${ENVIRONMENTS},--log-level ERROR down --volumes)
