import { describe, it, expect } from 'vitest';
import { RandomizedSet } from './380';

describe('380 - insert_delete_getrandom', () => {
  it('should insert elements correctly', () => {
    const randomizedSet = new RandomizedSet();

    expect(randomizedSet.insert(1)).toBe(true);
    expect(randomizedSet.insert(1)).toBe(false);
  });

  it('should remove elements correctly', () => {
    const randomizedSet = new RandomizedSet();

    randomizedSet.insert(1);
    expect(randomizedSet.remove(2)).toBe(false);
    expect(randomizedSet.remove(1)).toBe(true);
    expect(randomizedSet.remove(1)).toBe(false);
  });

  it('should get a random element', () => {
    const randomizedSet = new RandomizedSet();

    randomizedSet.insert(1);
    randomizedSet.insert(2);
    const randomValue = randomizedSet.getRandom();
    expect([1, 2]).toContain(randomValue);
  });

  it('should handle multiple operations', () => {
    const randomizedSet = new RandomizedSet();

    expect(randomizedSet.insert(1)).toBe(true);
    expect(randomizedSet.remove(2)).toBe(false);
    expect(randomizedSet.insert(2)).toBe(true);
    const randomValue = randomizedSet.getRandom();
    expect([1, 2]).toContain(randomValue);
    expect(randomizedSet.remove(1)).toBe(true);
    expect(randomizedSet.insert(2)).toBe(false);
    expect(randomizedSet.getRandom()).toBe(2);
  });
});
