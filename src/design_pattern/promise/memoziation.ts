const cache = new Map();

function memoize(url: string) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        cache.set(url, data);
        resolve(data);
      })
      .catch(error => reject(error));
  });
}
