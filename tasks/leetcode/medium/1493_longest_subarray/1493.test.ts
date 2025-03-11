import { describe, it, expect } from 'vitest';
import { longestSubarray } from './1493';

describe('1493 - longest_subarray', () => {
  it('UC1 - empty array', () => {
    expect(longestSubarray([])).toBe(0);
  });

  it('UC2 - array with one zero', () => {
    expect(longestSubarray([1, 1, 0, 1])).toBe(3);
  });

  it('UC3 - array with two zeros', () => {
    expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
  });

  it('UC4 - array without zeros', () => {
    expect(longestSubarray([1, 1, 1])).toBe(2);
  });

  it('array with three zeros', () => {
    expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1])).toBe(
      5
    );
  });

  it('array with four zeros', () => {
    expect(
      longestSubarray([
        0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
      ])
    ).toBe(5);
  });

  it('array with five zeros', () => {
    expect(
      longestSubarray([
        0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
        1, 1, 1,
      ])
    ).toBe(6);
  });
});
