.PHONY: doc check clean

clean:
	rm -fr out/

check:
	npm test

doc:
	npm run doc
	@echo "Now, open 'out/index.html' with your favorite browser."

# List undocumented members
undoc:
	npx eslint .

test-ct:
	./node_modules/mocha/bin/mocha.js test/chore-template.test.js

# Using npx because installed locally (https://stackoverflow.com/a/55101769)
lint:
	npx jslint src/*.js test/*.js

