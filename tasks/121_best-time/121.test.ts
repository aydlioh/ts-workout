import { describe, it, expect } from "vitest";
import { maxProfit } from "./121";

describe("121 - best-time", () => {
  it("should return 0 when array is empty", () => {
    expect(maxProfit([])).toBe(0);
  });

  it("should return 0 when array has one element", () => {
    expect(maxProfit([1])).toBe(0);
  });

  it("should return 4 when array is [7,1,5,3,6,4]", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("should return 0 when array is [7,6,4,3,1]", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
