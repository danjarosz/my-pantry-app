import classSelector from "./classSelector";

describe("classSelector", () => {
  it("should return an empty string if no parameters provided", () => {
    const expected = "";
    const result = classSelector();
    expect(result).toEqual(expected);
  });

  it("should return an empty string due to invalid values provided", () => {
    const expected = "";
    const result = classSelector([false, "", true]);
    expect(result).toEqual(expected);
  });

  it("should return a string of single class", () => {
    const expected = "class-1";
    const result = classSelector(["class-1"]);
    expect(result).toEqual(expected);
  });

  it("should return a string of multiple classes", () => {
    const expected = "class-1 class-2 class-3";
    const result = classSelector(["class-1", "class-2", "class-3"]);
    expect(result).toEqual(expected);
  });

  it("should return a string of multiple classes, ignoring invalid values", () => {
    const expected = "class-1 class-3 class-5 class-6";
    const result = classSelector([
      "class-1",
      false,
      "class-3",
      "",
      "class-5",
      true,
      "class-6",
    ]);
    expect(result).toEqual(expected);
  });
});
