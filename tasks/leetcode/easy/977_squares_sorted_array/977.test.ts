import { describe, it, expect } from 'vitest';
import { sortedSquares } from './977';

describe('977 - squares_sorted_array', () => {
  it('UC1', () => {
    const nums = [-4, -1, 0, 3, 10];
    const result = sortedSquares(nums);
    expect(result).toEqual([0, 1, 9, 16, 100]);
  });

  it('UC2', () => {
    const nums = [-7, -3, 2, 3, 11];
    const result = sortedSquares(nums);
    expect(result).toEqual([4, 9, 9, 49, 121]);
  });

  it('UC3', () => {
    const nums = [-5, -4, -2, 0, 1];
    const result = sortedSquares(nums);
    expect(result).toEqual([0, 1, 4, 16, 25]);
  });

  it('UC4', () => {
    const nums = [-10, -5, 0, 5, 10];
    const result = sortedSquares(nums);
    expect(result).toEqual([0, 25, 25, 100, 100]);
  });
});
