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

export function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  const res = [] as number[];
  const queue = [root] as TreeNode[];

  while (queue.length) {
    // Считываем текущую сумму на уровне и высчитываем среднее значение
    const sum = queue.reduce((acc, node) => acc + node.val, 0);
    const len = queue.length;
    res.push(sum / len);

    // Перебираем каждый элемент текущего уровня,
    // удаляем его и добавляем дочерние корни на следующий уровень
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
}
