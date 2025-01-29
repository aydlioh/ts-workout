import { describe, it, expect } from 'vitest';
import { TreeNode, isSameTree } from './100';

describe('isSameTree - функция, которая сравнивает два дерева', () => {
  it('сравнивает два дерева, состоящие из одного узла', () => {
    const root1 = new TreeNode(5);
    const root2 = new TreeNode(5);

    expect(isSameTree(root1, root2)).toBe(true);
  });

  it('сравнивает два дерева, состоящие из нескольких узлов', () => {
    const root1 = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    const root2 = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );

    expect(isSameTree(root1, root2)).toBeTruthy();
  });

  it('сравнивает два дерева, которые отличаются', () => {
    const root1 = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    );
    const root2 = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3, new TreeNode(5))
    );

    expect(isSameTree(root1, root2)).toBeFalsy();
  });
});
