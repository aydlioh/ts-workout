import { describe, it, expect } from 'vitest';
import { TreeNode, minDepth } from './111';

describe('minDepth - функция, которая возвращает минимальную глубину бинарного дерева', () => {
  it('вычисляет минимальную глубину для дерева из одного узла', () => {
    const root = new TreeNode(5);

    expect(minDepth(root)).toBe(1);
  });

  it('вычисляет минимальную глубину для сбалансированного дерева', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );

    expect(minDepth(root)).toBe(2);
  });

  it('вычисляет минимальную глубину для несбалансированного дерева', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    );

    expect(minDepth(root)).toBe(2);
  });

  it('возвращает 0 для null дерева', () => {
    expect(minDepth(null)).toBe(0);
  });
});
