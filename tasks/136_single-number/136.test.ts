import { describe, expect, test } from 'vitest';
import { singleNumber } from './136';

describe('singleNumber', () => {
  test('returns 1 when input is [2, 2, 1]', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test('returns 4 when input is [1, 2, 3, 4, 1, 2, 3]', () => {
    expect(singleNumber([1, 2, 3, 4, 1, 2, 3])).toBe(4);
  });

  test('returns 2 when input is [1, 1, 2]', () => {
    expect(singleNumber([1, 1, 2])).toBe(2);
  });
});
