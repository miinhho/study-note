async function retryfn(url: string) {
  let retryCount = 0;

  const tryPromise = () => new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
      .catch(err => reject(err));
  });

  const retry = () => {
    retryCount++;
    if (retryCount > 3) {
      throw new Error('Retry count exceeded');
    }
    console.log(`Retry count: ${retryCount}`);
    return tryPromise();
  };

  return tryPromise().catch(() => retry());
}
