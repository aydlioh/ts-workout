import { describe, it, expect } from "vitest";
import { averageOfLevels, TreeNode } from "./637";

describe("637 - binary-tree-average-levels", () => {
  it("computes average for a single node tree", () => {
    const root = new TreeNode(5);
    expect(averageOfLevels(root)).toEqual([5]);
  });

  it("computes averages for a balanced tree", () => {
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    expect(averageOfLevels(root)).toEqual([3, 14.5, 11]);
  });

  it("computes averages for an unbalanced tree", () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8))), new TreeNode(3));
    expect(averageOfLevels(root)).toEqual([1, 2.5, 4, 8]);
  });

  it("returns empty array for null tree", () => {
    expect(averageOfLevels(null)).toEqual([]);
  });

  it("handles tree with negative values", () => {
    const root = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3, new TreeNode(-4), new TreeNode(-5)));
    expect(averageOfLevels(root)).toEqual([-1, -2.5, -4.5]);
  });
});
