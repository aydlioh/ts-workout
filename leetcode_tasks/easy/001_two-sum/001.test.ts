import { twoSum } from './001';
import { describe, it, expect } from 'vitest';

describe('twoSum - функция, которая находит две цифры в массиве, сумма которых равна target', () => {
  it('находит пару цифр, сумма которых равна target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('возвращает пустой массив, если таких цифр нет', () => {
    expect(twoSum([2, 8, 15], 9)).toEqual([]);
  });
});
