import { describe, it, expect } from 'vitest';
import { climbStairsReq } from './70';

describe('climbStairs вычисляет количество способов подняться на n ступенек', () => {
  it('returns 1 for n = 1', () => {
    expect(climbStairsReq(1)).toBe(1);
  });

  it('returns 2 for n = 2', () => {
    expect(climbStairsReq(2)).toBe(2);
  });

  it('returns 3 for n = 3', () => {
    expect(climbStairsReq(3)).toBe(3);
  });

  it('returns 5 for n = 4', () => {
    expect(climbStairsReq(4)).toBe(5);
  });

  it('returns 8 for n = 5', () => {
    expect(climbStairsReq(5)).toBe(8);
  });
});
