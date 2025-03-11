interface Array<T> {
  filter2<S extends T>(
    callback: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  filter2(
    callback: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
}

Array.prototype.filter2 = function <T>(
  this: T[],
  callback: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any
): T[] {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  const result: T[] = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Проверяем, существует ли индекс в массиве (важно для разреженных массивов)
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

const arr: number[] = [1, 2, 3, 4, 5];

const res1 = arr.filter((x) => x % 2);
const res2 = arr.filter2((x) => x % 2);

console.log(res1); // [1, 3, 5]
console.log(res2); // [1, 3, 5]
