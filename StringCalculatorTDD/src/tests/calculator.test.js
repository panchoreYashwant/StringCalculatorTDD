// tests/calculator.test.js

const { add } = require("../calculator");

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself if only one number is provided", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  it("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("5,7")).toBe(12);
  });

  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
  });

  it("should throw an error if any negative numbers are provided", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("-1,-2")).toThrow("negative numbers not allowed: -1,-2");
  });
});
