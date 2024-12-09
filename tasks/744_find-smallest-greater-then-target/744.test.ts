import { describe, it, expect } from "vitest";
import { nextGreatestLetter } from "./744";

describe("744 - find-smallest-greater-then-target", () => {
  it("returns the smallest letter greater than the target", () => {
    expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c");
    expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f");
    expect(nextGreatestLetter(["c", "f", "j"], "d")).toBe("f");
    expect(nextGreatestLetter(["c", "f", "j"], "g")).toBe("j");
    expect(nextGreatestLetter(["c", "f", "j"], "j")).toBe("c");
    expect(nextGreatestLetter(["c", "f", "j"], "k")).toBe("c");
  });

  it("handles edge cases with repeated letters", () => {
    expect(nextGreatestLetter(["e", "e", "e", "n", "n"], "e")).toBe("n");
    expect(nextGreatestLetter(["e", "e", "e", "n", "n"], "n")).toBe("e");
  });
});
