import { describe, expect, test } from 'vitest';
import { missingNumber } from './268.ts';

describe('268.test', () => {
  test('returns 2 when input is [3, 0, 1]', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test('returns 2 when input is [0, 1]', () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test('returns 8 when input is [9,6,4,2,3,5,7,0,1]', () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
  });
});
