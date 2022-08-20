import { LocalizationContext } from "./LocalizationContext";
import { render, screen } from "@testing-library/react";
import { Lang } from "../../types";

describe("LocalizationContext", () => {
  it("should return expected params", () => {
    const initialValues = {
      lang: Lang.en,
      //@ts-ignore
      changeLang: (a) => {},
      //@ts-ignore
      t: (a, b) => "",
    };

    render(
      <LocalizationContext.Provider
        value={{
          lang: initialValues.lang,
          changeLang: initialValues.changeLang,
          t: initialValues.t,
        }}
      >
        <LocalizationContext.Consumer>
          {(value) => {
            const { lang, changeLang, t } = value;
            expect(changeLang).toEqual(initialValues.changeLang);
            expect(t).toEqual(initialValues.t);
            return (
              <>
                <div data-testid="lang">{lang}</div>
              </>
            );
          }}
        </LocalizationContext.Consumer>
      </LocalizationContext.Provider>
    );

    expect(screen.getByTestId("lang")).toHaveTextContent(initialValues.lang);
  });
});
