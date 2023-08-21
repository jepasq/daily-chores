.PHONY: doc check clean

clean:
	rm -fr out/

check:
	npm test

doc:
	jsdoc -r src
