deps:
	npm ci

test:
	./node_modules/.bin/mocha test-directory/test.js

publish:
	npm publish --access public