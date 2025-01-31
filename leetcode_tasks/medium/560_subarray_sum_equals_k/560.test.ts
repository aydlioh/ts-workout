import { describe, it, expect } from "vitest";
import { subarraySum } from "./560";

describe("560 - subarray_sum_equals_k", () => {
  it("UC1", () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
  });
});

