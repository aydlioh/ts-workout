import { describe, it, expect } from 'vitest';
import { countBits } from './338';

describe('countBits - функция которая возвращает количество единиц в двоичном представлении числа', () => {
  it('возвращает [0] при n = 0', () => {
    expect(countBits(0)).toEqual([0]);
  });

  it('возвращает [0, 1] при n = 1', () => {
    expect(countBits(1)).toEqual([0, 1]);
  });

  it('возвращает [0, 1, 1] при n = 2', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it('возвращает [0, 1, 1, 2] при n = 3', () => {
    expect(countBits(3)).toEqual([0, 1, 1, 2]);
  });

  it('возвращает [0, 1, 1, 2, 1, 2] при n = 5', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
