import { describe, it, expect } from "vitest";
import { TreeNode, hasPathSum } from "./112";

describe("112 - path-sum", () => {
  it("computes path sum for a single node tree", () => {
    const root = new TreeNode(5);
    expect(hasPathSum(root, 5)).toBe(true);
  });

  it("computes path sum for a balanced tree", () => {
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
    );
    expect(hasPathSum(root, 22)).toBeTruthy();
  });

  it("computes path sum for an unbalanced tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    );
    expect(hasPathSum(root, 14)).toBeFalsy();
  });

  it("returns false for null tree", () => {
    expect(hasPathSum(null, 10)).toBe(false);
  });
});
