"use strict";

exports.chunkPromises = function (promises, size) {
  if (!Array.isArray(promises) || !promises.length) {
    return Promise.resolve([]);
  }

  size = size ? size : 10;

  const chunks = [];
  for (let i = 0, j = promises.length; i < j; i += size) {
    chunks.push(promises.slice(i, i + size));
  }

  let collector = Promise.resolve([]);
  for (const chunk of chunks) {
    collector = collector.then((results) =>
      Promise.all(chunk.map((c) => c())).then((subResults) =>
        results.concat(subResults)
      )
    );
  }
  return collector;
};
