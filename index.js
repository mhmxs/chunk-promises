exports.chunkPromises = function(promises, size) {
    if (!Array.isArray(promises) || !promises.length) {
        return Promise.resolve([])
    }

    var size = size ? size : 10;

    var chunks = [];
    for (i = 0, j = promises.length; i < j; i += size) {
        chunks.push(promises.slice(i, i + size));
    }

    var collector = Promise.resolve([]);
    chunks.forEach(chunk => {
      collector = collector.then(results => Promise.all(chunk.map(c => c()))
        .then(subResults => results.concat(subResults)));
    });
    return collector;
}