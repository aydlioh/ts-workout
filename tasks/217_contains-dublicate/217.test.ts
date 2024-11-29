import { describe, expect, test } from 'vitest';
import { containsDuplicate } from './217.ts';

describe('containsDuplicate', () => {
  test('should return true if array contains duplicate', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  });

  test('should return false if array does not contain duplicate', () => {
    expect(containsDuplicate([1, 2, 3])).toBeFalsy();
  });

  test('should return true if array contains duplicate and length is 1', () => {
    expect(containsDuplicate([7, 7])).toBeTruthy();
  });

  test('should return false if array is empty', () => {
    expect(containsDuplicate([])).toBeFalsy();
  });
});

