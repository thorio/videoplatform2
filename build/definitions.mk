define if_true
$(if $(filter $(1),true),$(2),$(3))
endef

define compose
docker-compose -p ${COMPOSE_PROJECT_BASE}_${DOCKER_ENVIRONMENT} -f build/docker-compose.yml -f build/docker-compose.${DOCKER_ENVIRONMENT}.yml $(1)
endef

define check_environment
$(if $(filter ${DOCKER_ENVIRONMENT},${ENVIRONMENTS}),,$(error invalid environment '${DOCKER_ENVIRONMENT}'))
endef

define compose-foreach-print
$(foreach $(1),$(2), echo $(call compose,${3}) && export DOCKER_ENVIRONMENT=${DOCKER_ENVIRONMENT} && $(call compose,${3}) &&) true
endef
