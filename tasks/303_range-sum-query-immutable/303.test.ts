import { describe, expect, test } from 'vitest';
import { NumArray } from './303.ts';

describe('303 - range-sum-query-immutable', () => {
  test('constructs correctly', () => {
    const nums = [1, 2, 3, 4];
    const numArray = new NumArray(nums);
    expect(numArray.prefSums).toEqual([1, 3, 6, 10]);
  });

  test('computes prefix sums correctly', () => {
    const nums = [1, 2, 3, 4];
    const numArray = new NumArray(nums);
    expect(numArray.sumRange(0, 1)).toBe(3);
    expect(numArray.sumRange(1, 2)).toBe(5);
    expect(numArray.sumRange(2, 3)).toBe(7);
    expect(numArray.sumRange(0, 3)).toBe(10);
  });
});
