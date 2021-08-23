# run linting tools
.PHONY: lint
lint:
	@! find . $(call find_names,node_modules, dist .eslintcache .nuxt .prisma) -prune -o -type f -exec file "{}" ";" | grep CRLF || (echo -e "\nCRLF found!\n" && false)
	@lerna exec --loglevel silent --stream --no-prefix --no-bail -- npm run --silent --if-present lint -- --color $(call if-eq,${FIX},true,--fix,)

# run linters and fix all fixable problems
.PHONY: lint.fix
lint.fix: FIX=true
lint.fix: lint
