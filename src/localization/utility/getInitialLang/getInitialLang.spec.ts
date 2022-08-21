import { getInitialLang } from "./getInitialLang";
import { Lang } from "../../types";
import { langStorageKey } from "../../constants";

describe("getInitialLang", () => {
  afterAll(() => {
    localStorage.removeItem(langStorageKey);
  });

  it("should return provided language", () => {
    const expectedResult = Lang.pl;
    const result = getInitialLang(Lang.pl);
    expect(result).toEqual(expectedResult);
  });

  it("should return language restored form local storage", () => {
    localStorage.setItem(langStorageKey, Lang.pl);
    const expectedResult = Lang.pl;
    const result = getInitialLang();
    expect(result).toEqual(expectedResult);
  });

  it("should return default language", () => {
    localStorage.removeItem(langStorageKey);
    const expectedResult = Lang.en;
    const result = getInitialLang();
    expect(result).toEqual(expectedResult);
  });
});
