import { describe, it, expect } from "vitest";
import { search } from "./704";

describe("704 - binary-search", () => {
  it("should return index for existing element", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it("should return -1 for non-existing element", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  it("should return index for element in the beginning of array", () => {
    expect(search([-1, 0, 3, 5, 9, 12], -1)).toBe(0);
  });

  it("should return index for element in the end of array", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 12)).toBe(5);
  });

  it("should return -1 for empty array", () => {
    expect(search([], 0)).toBe(-1);
  });

  it("should return 0 for array with one element", () => {
    expect(search([5], 5)).toBe(0);
  });
});
