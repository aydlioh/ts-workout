import { describe, it, expect } from 'vitest';
import { TreeNode, isSubtree } from './572';

describe('isSubtree - функция, которая проверяет, является ли одно дерево поддеревом другого', () => {
  it('возвращает true, если поддерево является частью дерева', () => {
    const root = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      new TreeNode(5)
    );
    const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('возвращает false, если поддерево не является частью дерева', () => {
    const root = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      new TreeNode(5)
    );
    const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(3));
    expect(isSubtree(root, subRoot)).toBeFalsy();
  });

  it('возвращает false для пустого дерева', () => {
    const subRoot = new TreeNode(1);
    expect(isSubtree(null, subRoot)).toBeFalsy();
  });

  it('возвращает false для пустого поддерева', () => {
    const root = new TreeNode(1);
    expect(isSubtree(root, null)).toBeFalsy();
  });
});
