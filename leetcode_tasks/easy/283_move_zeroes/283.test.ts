import { describe, it, expect } from 'vitest';
import { moveZeroes } from './283';
describe('283 - move_zeroes', () => {
  it('UC1', () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });
});
