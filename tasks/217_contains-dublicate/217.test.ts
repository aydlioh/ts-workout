import { describe, expect, test } from 'vitest';
import { containsDuplicate } from './217.ts';

describe('containsDuplicate - функция которая определяет, есть ли дубликаты в массиве', () => {
  test('возвращает true если в массиве есть дубликаты', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  });

  test('возвращает false если в массиве нет дубликатов', () => {
    expect(containsDuplicate([1, 2, 3])).toBeFalsy();
  });

  test('возвращает true если в массиве есть дубликаты и длина массива 1', () => {
    expect(containsDuplicate([7, 7])).toBeTruthy();
  });

  test('возвращает false если массив пустой', () => {
    expect(containsDuplicate([])).toBeFalsy();
  });
});
