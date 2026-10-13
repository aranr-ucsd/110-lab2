import { describe, it, expect } from "vitest";
import list_foods from "./foods.ts";

describe("foods", () => {
  
  let foods = list_foods();
  it("should have at most 5 items", () => {
    expect(foods.length).toBeLessThanOrEqual(5);
  });

  it("should have at most 5 items", () => {
    expect(foods).toContain("Pasta");
  });
});

