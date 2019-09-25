# chunk-promises
This small NodeJS module split promises into chunks and executes chunks one by one

# Usage
```
const chunkPromises = require('chunk-promises').chunkPromises;

var promises = [
    () => new Promise(resolver => { resolver("a") }),
    () => new Promise(resolver => { resolver("b") }),
    () => new Promise(resolver => { resolver("c") }),
    () => new Promise(resolver => { resolver("d") }),
    () => new Promise(resolver => { resolver("e") }),
    () => new Promise(resolver => { resolver("f") }),
    () => new Promise(resolver => { resolver("g") }),
]

chunkPromises(promises, 2) // array of promises, chunk size
    .then(results => {
        console.log(results)
    });
```