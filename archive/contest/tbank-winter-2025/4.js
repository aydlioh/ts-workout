/*
Герман немного устал. Вот бы кто-нибудь сделал за него домашнее задание...

Задача, которую необходимо решить Герману, звучит следующим образом.

Дана последовательность a_1, a_2, ..., a_n и числа x, y, z.

Разрешается произвольное количество (в том числе ноль) раз выполнить следующую операцию: выбрать произвольное i (1 ≤ i ≤ n) и увеличить a_i на единицу.

Необходимо, чтобы хотя бы один элемент из последовательности делился на x, хотя бы один элемент делился на y и хотя бы один элемент делился на z. Разрешается, чтобы для разных значений из набора (x, y, z) подходил один и тот же элемент из последовательности.

Помогите Герману отдохнуть перед сессией и найдите минимальное количество операций, которое необходимо выполнить, чтобы условие стало выполнено.

Формат входных данных

Первая строка содержит числа n (1 ≤ n ≤ 2 * 10^5), x, y, z (1 ≤ x, y, z ≤ 10^6).

Вторая строка содержит числа a_1, a_2, ..., a_n (1 ≤ a_i ≤ 10^18).

Формат выходных данных

Выведите одно число — минимальное количество операций, которое надо выполнить, чтобы для каждого из чисел x, y, z был хотя бы один элемент в последовательности, кратный данному числу.

Комментарии к примеру

В примере можно дважды увеличить a_4 и один раз увеличить a_5. Тогда на 10 будет делиться a_4, на 20 будет делиться a_5, на 30 будет делиться a_4.

Примеры данных

Вход
6 10 20 30
8 17 5 28 39 13

Вывод
3
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getMinOperations = (n, x, y, z, arr) => {
  let minCorrectionsX = x;
  let minCorrectionsY = y;
  let minCorrectionsZ = z;

  const recentCorrections = { x: null, y: null, z: null };

  for (let i = 0; i < n; i++) {
    const a = arr[i];

    const remX = a % x;
    const adjX = remX === 0n ? 0n : x - remX;
    if (adjX < minCorrectionsX) {
      recentCorrections.x = a;
      minCorrectionsX = adjX;
    }

    const remY = a % y;
    const adjY = remY === 0n ? 0n : y - remY;
    if (adjY < minCorrectionsY) {
      recentCorrections.y = a;
      minCorrectionsY = adjY;
    }

    const remZ = a % z;
    const adjZ = remZ === 0n ? 0n : z - remZ;
    if (adjZ < minCorrectionsZ) {
      recentCorrections.z = a;
      minCorrectionsZ = adjZ;
    }

    if (
      minCorrectionsX === 0n &&
      minCorrectionsY === 0n &&
      minCorrectionsZ === 0n
    ) {
      return 0n;
    }
  }

  if (
    recentCorrections.x === recentCorrections.y &&
    recentCorrections.y === recentCorrections.z
  ) {
    return minCorrectionsX;
  } else if (recentCorrections.x === recentCorrections.y) {
    return minCorrectionsX + minCorrectionsZ;
  } else if (recentCorrections.y === recentCorrections.z) {
    return minCorrectionsY + minCorrectionsX;
  } else if (recentCorrections.x === recentCorrections.z) {
    return minCorrectionsX + minCorrectionsY;
  } else {
    return minCorrectionsX + minCorrectionsY + minCorrectionsZ;
  }
}

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const parts = input[0].split(' ');
  const n = Number(parts[0]);
  const x = BigInt(parts[1]);
  const y = BigInt(parts[2]);
  const z = BigInt(parts[3]);
  const arr = input[1].split(' ').map(BigInt);

  console.log(getMinOperations(n, x, y, z, arr).toString());
});
