# (re)-initialize after a clone or clean
.PHONY: init
init:
	npm ci
	npx lerna --loglevel silent bootstrap --ci
