import { describe, expect, test } from 'vitest';
import { singleNumber } from './136';

describe('singleNumber - функция которая находит число которое встречается только один раз', () => {
  test('возвращает 1, при [2, 2, 1]', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test('возвращает 4, при [1, 2, 3, 4, 1, 2, 3]', () => {
    expect(singleNumber([1, 2, 3, 4, 1, 2, 3])).toBe(4);
  });

  test('возвращает 2, при [1, 1, 2]', () => {
    expect(singleNumber([1, 1, 2])).toBe(2);
  });
});

