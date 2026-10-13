import { describe, it, expect } from "vitest";
import list_snacks from "./snacks";

describe("snacks", () => {
  let snacks = list_snacks();	
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(snacks).toContain("chips");
  });
});

