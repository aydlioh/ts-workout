import { findDisappearedNumbers } from './448.ts';
import { describe, expect, test } from 'vitest';

describe('findDisappearedNumbers - находит пропавшие числа в массиве', () => {
  test('возвращает [5, 6] при [4, 3, 2, 7, 8, 2, 3, 1]', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  test('возвращает [] при [1, 2]', () => {
    expect(findDisappearedNumbers([1, 2])).toEqual([]);
  });

  test('возвращает [2] при [1, 1]', () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });

  test('возвращает [] при []', () => {
    expect(findDisappearedNumbers([])).toEqual([]);
  });

  test('возвращает [1, 2] при [3, 4]', () => {
    expect(findDisappearedNumbers([3, 4])).toEqual([1, 2]);
  });
});
