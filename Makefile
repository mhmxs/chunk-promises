deps:
	npm install-ci-test
	npm install

fmt:
	./node_modules/prettier/bin-prettier.js -w *.md *.js *.json .*.json .github/workflows/*.yml

lint:
	./node_modules/eslint/bin/eslint.js --fix ./

test:
	./node_modules/.bin/mocha test-directory/test.js

publish:
	npm publish --access public
