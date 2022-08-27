import { useTranslation } from "./useTranslation";
import { renderHook } from "@testing-library/react";
import { Lang } from "../../types";

describe("useTranslation", () => {
  it("should return correct values", () => {
    const initialValues = {
      lang: Lang.en,
    };

    const {
      result: {
        current: { lang, changeLang, t },
      },
    } = renderHook(() => useTranslation());

    expect(lang).toEqual(initialValues.lang);
    expect(changeLang).not.toBeNull();
    expect(t).not.toBeNull();
  });
});
