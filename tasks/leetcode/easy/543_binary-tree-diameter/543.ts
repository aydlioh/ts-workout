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

// GOOD
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    result = Math.max(result, left + right);
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return result;
}

// BAD
function depthBAD(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(depthBAD(root.left), depthBAD(root.right));
}

function diameterOfBinaryTreeBAD(root: TreeNode | null): number {
  if (!root || (!root.left && !root.right)) return 0;

  const left = depthBAD(root.left);
  const right = depthBAD(root.right);
  const leftDiameter = diameterOfBinaryTreeBAD(root.left);
  const rightDiameter = diameterOfBinaryTreeBAD(root.right);

  return Math.max(left + right, leftDiameter, rightDiameter);
}
