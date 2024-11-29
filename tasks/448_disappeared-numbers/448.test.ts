import { findDisappearedNumbers } from './448.ts';
import { describe, expect, test } from 'vitest';

describe('448.test', () => {
  test('returns [5, 6] when input is [4, 3, 2, 7, 8, 2, 3, 1]', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  test('returns [] when input is [1, 2]', () => {
    expect(findDisappearedNumbers([1, 2])).toEqual([]);
  });

  test('returns [2] when input is [1, 1]', () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });

  test('returns [] when input is []', () => {
    expect(findDisappearedNumbers([])).toEqual([]);
  });

  test('returns [1, 2] when input is [3, 4]', () => {
    expect(findDisappearedNumbers([3, 4])).toEqual([1, 2]);
  });
});
