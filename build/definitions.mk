define if_true
	$(if $(filter $(1),true),$(2),$(3))
endef

define compose
	docker-compose -p ${COMPOSE_PROJECT_BASE}${environment} -f build/docker-compose.yml -f build/docker-compose.${environment}.yml $(1)
endef

define check_environment
	$(if $(filter ${environment},${ENVIRONMENTS}),,$(error invalid environment '${environment}'))
endef

define run-lint
	lerna exec --loglevel silent --stream --no-prefix --no-bail -- npm run --silent --if-present lint -- --color $1
endef

define compose-foreach-print
	$(foreach $(1),$(2), echo $(call compose,${3}) && $(call compose,${3}) &&) true
endef
