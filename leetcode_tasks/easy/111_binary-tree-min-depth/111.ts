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

export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let result = 0;
  const queue = [root] as TreeNode[];

  while (queue.length) {
    const len = queue.length;
    result++;

    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (!node) return result;
      if (!node.left && !node.right) return result;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

export function minDepthReqursive(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  return (
    Math.min(
      root.left ? minDepthReqursive(root.left) : Infinity,
      root.right ? minDepthReqursive(root.right) : Infinity
    ) + 1
  );
}
