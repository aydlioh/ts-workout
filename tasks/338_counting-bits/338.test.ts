import { describe, it, expect } from "vitest";
import { countBits } from "./338";

describe("338 - counting-bits", () => {
  it("returns [0] when n = 0", () => {
    expect(countBits(0)).toEqual([0]);
  });

  it("returns [0, 1] when n = 1", () => {
    expect(countBits(1)).toEqual([0, 1]);
  });

  it("returns [0, 1, 1] when n = 2", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it("returns [0, 1, 1, 2] when n = 3", () => {
    expect(countBits(3)).toEqual([0, 1, 1, 2]);
  });

  it("returns [0, 1, 1, 2, 1, 2] when n = 5", () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
