.PHONY: doc check clean

clean:
	rm -fr out/

check:
	npm test

doc:
	jsdoc -r src src/Mainpage.md
	@echo "Now, open 'out/index.html' with your favorite browser."
