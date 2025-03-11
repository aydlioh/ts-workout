/**
 * Необходимо написать функцию, которая на вход принимает урл,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
 * Для получении данных использовать fetch.
 * Можно использовать только Promise API
 * Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */
function get(url) {
  let counter = 0;

  const customFetch = () =>
    myFetch(url)
      .then((res) => res)
      .catch(() => {
        if (counter < 4) {
          counter++;
          return customFetch();
        }

        return Promise.reject('Заданный URL недоступен');
      });

  return customFetch();
}

get('')
  .then(console.log)
  .catch(console.error);

let counter = -3;
function myFetch(url) {
  return new Promise((resolve, reject) => {
    console.log('fetch');
    setTimeout(() => {
      if (counter === 5) {
        resolve(JSON.stringify({ data: true }));
      } else {
        counter++;
        reject(new Error());
      }
    }, 100);
  });
}
