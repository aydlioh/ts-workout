export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepthHelper(root: TreeNode | null, count: number): number {
  if (!root || (root.left === null && root.right === null)) return count;
  return Math.max(
    maxDepthHelper(root.left, count + 1),
    maxDepthHelper(root.right, count + 1)
  );
}

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return maxDepthHelper(root, 1);
}
