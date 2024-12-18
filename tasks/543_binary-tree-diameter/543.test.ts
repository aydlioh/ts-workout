import { describe, it, expect } from 'vitest';
import { diameterOfBinaryTree, TreeNode } from './543';

describe('diameterOfBinaryTree - функция, которая возвращает диаметр бинарного дерева', () => {
  it('вычисляет диаметр для дерева, состоящего из одного узла', () => {
    const root = new TreeNode(5);
    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  it('вычисляет диаметр для сбалансированного дерева', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    );
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  it('вычисляет диаметр для несбалансированного дерева', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5))))
    );
    expect(diameterOfBinaryTree(root)).toBe(4);
  });

  it('возвращает 0 для null дерева', () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
  });
});
