import { describe, it, expect } from 'vitest';
import { climbStairs } from './70';

describe('climbStairs вычисляет количество способов подняться на n ступенек', () => {
  it('returns 1 for n = 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  it('returns 2 for n = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('returns 3 for n = 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('returns 5 for n = 4', () => {
    expect(climbStairs(4)).toBe(5);
  });

  it('returns 8 for n = 5', () => {
    expect(climbStairs(5)).toBe(8);
  });
});
