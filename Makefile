deps:
	npm install

test:
	./node_modules/.bin/mocha test-directory/test.js

publish:
	npm publish --tag v1.0.4 --access public