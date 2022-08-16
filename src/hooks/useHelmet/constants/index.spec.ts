import { initialConfig } from "./";

describe("config", () => {
  it("should have correct initial values", () => {
    expect(initialConfig).toEqual({
      withAppName: false,
      connector: " - ",
    });
  });
});
