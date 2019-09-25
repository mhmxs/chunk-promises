const {describe} = require('mocha');
const assert = require('assert');
const chunkPromises = require('../index.js').chunkPromises;

describe('Test chunked promise execution:', function() {
  it('all 4 chunks must execute', function() {
    var promises = [
      new Promise(resolver => { resolver("a") }),
      new Promise(resolver => { resolver("b") }),
      new Promise(resolver => { resolver("c") }),
      new Promise(resolver => { resolver("d") }),
      new Promise(resolver => { resolver("e") }),
      new Promise(resolver => { resolver("f") }),
      new Promise(resolver => { resolver("g") }),
    ]

    chunkPromises(promises, 2)
      .then(results => {
        assert(["a", "b", "c", "d", "e", "f", "g"] === results);
      });
  });
});