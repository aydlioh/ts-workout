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

function rangeSumBSTBasic(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  if (!root) return 0;
  if (root.val < low) return rangeSumBST(root.right, low, high);
  if (root.val > high) return rangeSumBST(root.left, low, high);
  return (
    root.val +
    rangeSumBST(root.right, low, high) +
    rangeSumBST(root.left, low, high)
  );
}

export function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  let sum = 0;

  function DFS(node: TreeNode | null) {
    if (!node) return;
    const { left, right, val } = node;

    if (val >= low && val <= high) {
      sum += val;
    }

    [left, right].forEach((n) => {
      if (n) DFS(n);
    });
  }

  DFS(root);

  return sum;
}
