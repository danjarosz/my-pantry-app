import { restoreLangFromLocalStorage } from "./restoreLangFromLocalStorage";
import { langStorageKey } from "../../constants";
import { Lang } from "../../types";

describe("restoreLangFromLocalStorage", () => {
  afterAll(() => {
    localStorage.removeItem(langStorageKey);
  });

  it("should return restored language", () => {
    localStorage.setItem(langStorageKey, Lang.pl);
    const expected = Lang.pl;
    const result = restoreLangFromLocalStorage();

    expect(result).toEqual(expected);
  });

  it("should return null due to incorrect value in the key", () => {
    localStorage.setItem(langStorageKey, "some_incorrect_value");
    const expected = null;
    const result = restoreLangFromLocalStorage();

    expect(result).toEqual(expected);
  });

  it("should return null due to no key founded", () => {
    localStorage.removeItem(langStorageKey);
    const expected = null;
    const result = restoreLangFromLocalStorage();

    expect(result).toEqual(expected);
  });
});
