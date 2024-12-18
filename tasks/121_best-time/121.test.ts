import { describe, it, expect } from 'vitest';
import { maxProfit } from './121';

describe('maxProfit - функция, которая находит максимальную прибыль при покупке и продаже акций', () => {
  it('возвращает 0, если массив пустой', () => {
    expect(maxProfit([])).toBe(0);
  });

  it('возвращает 0, если в массиве только 1 элемент', () => {
    expect(maxProfit([1])).toBe(0);
  });

  it('возвращает 4, если массив [7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('возвращает 0, если массив [7,6,4,3,1]', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
