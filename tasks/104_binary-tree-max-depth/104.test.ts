import { describe, it, expect } from 'vitest';
import { maxDepth, TreeNode } from './104';

describe('maxDepth - функция, которая возвращает максимальную глубину бинарного дерева', () => {
  it('вычисляет максимальную глубину для дерева из одного узла', () => {
    const root = new TreeNode(5);
    expect(maxDepth(root)).toBe(1);
  });

  it('вычисляет максимальную глубину для сбалансированного дерева', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    expect(maxDepth(root)).toBe(3);
  });

  it('вычисляет максимальную глубину для несбалансированного дерева', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    );
    expect(maxDepth(root)).toBe(4);
  });

  it('возвращает 0 для null дерева', () => {
    expect(maxDepth(null)).toBe(0);
  });
});
