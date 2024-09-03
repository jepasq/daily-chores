.PHONY: doc check clean

clean:
	rm -fr out/

check:
	npm test

doc:
	npm run doc
	@echo "Now, open 'out/index.html' with your favorite browser."

test-ct:
	./node_modules/mocha/bin/mocha.js test/chore-template.test.js

lint:
	jslint src/*.js test/*.js

