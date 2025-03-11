import { describe, it, expect } from "vitest";
import { summaryRanges } from './228'

describe("228 - summary_ranges", () => {
  it("UC1", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
  });
});

