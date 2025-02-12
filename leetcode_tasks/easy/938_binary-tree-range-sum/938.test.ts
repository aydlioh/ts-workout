import { describe, it, expect } from 'vitest';
import { TreeNode, rangeSumBST } from './938';
describe('938 - range_sum_bst', () => {
  it('UC1', () => {
    const bst = new TreeNode(
      10,
      new TreeNode(5, new TreeNode(3), new TreeNode(7)),
      new TreeNode(15, null, new TreeNode(18))
    );
    expect(rangeSumBST(bst, 7, 15)).toBe(32);
  });

  it('UC2', () => {
    const bst = new TreeNode(
      10,
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(1)),
        new TreeNode(7, new TreeNode(6))
      ),
      new TreeNode(15, new TreeNode(13), new TreeNode(18))
    );
    expect(rangeSumBST(bst, 6, 10)).toBe(23);
  });
});
