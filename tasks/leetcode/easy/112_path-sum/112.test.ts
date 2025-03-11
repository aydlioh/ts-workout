import { describe, it, expect } from 'vitest';
import { TreeNode, hasPathSum } from './112';

describe('hasPathSum - функция, которая проверяет, существует ли путь в дереве, сумма элементов которого равна targetSum', () => {
  it('вычисляет сумму пути для дерева из одного узла', () => {
    const root = new TreeNode(5);
    expect(hasPathSum(root, 5)).toBe(true);
  });

  it('вычисляет сумму пути для сбалансированного дерева', () => {
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
    );
    expect(hasPathSum(root, 22)).toBeTruthy();
  });

  it('вычисляет сумму пути для несбалансированного дерева', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    );
    expect(hasPathSum(root, 14)).toBeFalsy();
  });

  it('возвращает false для null дерева', () => {
    expect(hasPathSum(null, 10)).toBe(false);
  });
});
