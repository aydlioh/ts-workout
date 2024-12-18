import { describe, it, expect } from 'vitest';
import { averageOfLevels, TreeNode } from './637';

describe('averageOfLevels - функция, которая вычисляет среднее значение каждого уровня бинарного дерева', () => {
  it('вычисляет среднее значение для дерева из одного узла', () => {
    const root = new TreeNode(5);
    expect(averageOfLevels(root)).toEqual([5]);
  });

  it('вычисляет среднее значение для сбалансированного дерева', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    expect(averageOfLevels(root)).toEqual([3, 14.5, 11]);
  });

  it('вычисляет среднее значение для несбалансированного дерева', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    );
    expect(averageOfLevels(root)).toEqual([1, 2.5, 4, 8]);
  });

  it('возвращает пустой массив для null дерева', () => {
    expect(averageOfLevels(null)).toEqual([]);
  });

  it('работает с деревом, содержащим отрицательные значения', () => {
    const root = new TreeNode(
      -1,
      new TreeNode(-2),
      new TreeNode(-3, new TreeNode(-4), new TreeNode(-5))
    );
    expect(averageOfLevels(root)).toEqual([-1, -2.5, -4.5]);
  });
});
