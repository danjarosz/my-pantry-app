import { initialConfig } from "./constants/config";
import { generateTitle } from "./utility/generateTitle";
import { appName } from "../../constants/constants";

describe("generateTitle", () => {
  it("should return App name", () => {
    const expected = appName;
    const result = generateTitle("", initialConfig);
    expect(result).toEqual(expected);
  });

  it("should return provided title only", () => {
    const expected = "My title";
    const result = generateTitle(expected, initialConfig);
    expect(result).toEqual(expected);
  });

  it("should return provided title only 2", () => {
    const expected = "My title";
    const result = generateTitle(expected, {
      withAppName: false,
    });
    expect(result).toEqual(expected);
  });

  it("should return provided title with app name and initial connector", () => {
    const title = "My title";
    const expected = `${appName}${initialConfig.connector}${title}`;
    const result = generateTitle(title, {
      withAppName: true,
    });
    expect(result).toEqual(expected);
  });

  it("should return provided title with app name and custom connector", () => {
    const title = "My title";
    const connector = ": ";
    const expected = `${appName}${connector}${title}`;
    const result = generateTitle(title, {
      withAppName: true,
      connector,
    });
    expect(result).toEqual(expected);
  });
});
