# start all services in the specified environment
.PHONY: run/%
run/%: run.start/% run.wait/% ;

# start all services
.PHONY: run.start/%
run.start/%: DOCKER_ENVIRONMENT=$*
run.start/%:
	$(call check_environment)
	$(call compose,up --remove-orphans -d)

# log output until receiving SIGTERM, then stop and remove all services
.PHONY: run.wait/%
run.wait/%: DOCKER_ENVIRONMENT=$*
run.wait/%:
	$(call check_environment)
	$(call compose,logs -f); \
	$(call compose,down)

# stop and remove all services
.PHONY: run.stop/%
run.stop/%: DOCKER_ENVIRONMENT=$*
run.stop/%:
	$(call check_environment)
	$(call compose,down)
