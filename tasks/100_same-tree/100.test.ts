import { describe, it, expect } from 'vitest';
import { TreeNode, isSameTree } from './100';

describe('100 - same-tree', () => {
  it('computes same tree for a single node tree', () => {
    const root1 = new TreeNode(5);
    const root2 = new TreeNode(5);

    expect(isSameTree(root1, root2)).toBe(true);
  });

  it('computes same tree for a balanced tree', () => {
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

    expect(isSameTree(root1, root2)).toBe(true);
  });

  it('computes same tree for a different tree', () => {
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

    expect(isSameTree(root1, root2)).toBe(false);
  });
  it('...', () => {});
});
