const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let counter = 0;

    for (let index in promises) {
      promises[index]
        .then((data) => {
          result[index] = data;
          counter++;

          if (counter === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
};

const resolve = (value, timeout) =>
  new Promise((res) => setTimeout(res, timeout, value));

const reject = (value, timeout) =>
  new Promise((_res, rej) => setTimeout(rej, timeout, value));

promiseAll([resolve(2, 200), resolve(1, 300), resolve(3, 100)]).then(
  console.log
);
promiseAll([reject(1, 100), resolve(2, 500), resolve(3, 1000)]).catch(
  console.log
);
