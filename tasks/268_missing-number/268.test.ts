import { describe, expect, test } from 'vitest';
import { missingNumber } from './268.ts';

describe('missingNumber - функция, которая находит отсутствующее число в массиве', () => {
  test('возвращает 2, при [3, 0, 1]', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test('возвращает 2, при [0, 1]', () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test('возвращает 8, прт [9,6,4,2,3,5,7,0,1]', () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
  });
});

