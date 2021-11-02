deps:
	npm ci

fmt:
	./node_modules/prettier/bin-prettier.js -w *.md *.js *.json

test:
	./node_modules/.bin/mocha test-directory/test.js

publish:
	npm publish --access public