import { describe, it, expect } from 'vitest';
import { mergeTrees, TreeNode } from './617';

describe('mergeTrees - функция, которая объединяет два бинарных дерева', () => {
  it('вычисляет объединенный результат для двух пустых деревьев', () => {
    expect(mergeTrees(null, null)).toBeNull();
  });

  it('вычисляет объединенный результат для двух непустых деревьев', () => {
    const root1 = new TreeNode(
      1,
      new TreeNode(3, new TreeNode(5)),
      new TreeNode(2)
    );
    const root2 = new TreeNode(
      2,
      new TreeNode(1, null, new TreeNode(4)),
      new TreeNode(3, new TreeNode(7))
    );
    expect(mergeTrees(root1, root2)).toEqual(
      new TreeNode(
        3,
        new TreeNode(4, new TreeNode(5), new TreeNode(4)),
        new TreeNode(5, new TreeNode(7))
      )
    );
  });
});
