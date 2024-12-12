import { describe, it, expect } from 'vitest';
import { TreeNode, minDepth } from './111';

describe('111 - binary-tree-min-depth', () => {
  it('computes min depth for a single node tree', () => {
    const root = new TreeNode(5);

    expect(minDepth(root)).toBe(1);
  });

  it('computes min depth for a balanced tree', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );

    expect(minDepth(root)).toBe(2);
  });

  it('computes min depth for an unbalanced tree', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    );

    expect(minDepth(root)).toBe(2);
  });

  it('returns 0 for null tree', () => {
    expect(minDepth(null)).toBe(0);
  });
});
