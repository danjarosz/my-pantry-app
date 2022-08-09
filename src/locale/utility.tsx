import { createContext, useCallback, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import locales from "./locale";

export enum supportedLanguages {
  en = "en",
  pl = "pl",
}

type ChangeLang = (lang: supportedLanguages) => void;

interface TParams {
  translate?: boolean;
}

type T = (key: string, params?: TParams) => string;

interface LocalizationContextInterface {
  lang: supportedLanguages;
  changeLang: ChangeLang;
  t: T;
}

export const LocalizationContext = createContext<LocalizationContextInterface>({
  lang: supportedLanguages.en,
  changeLang: (a) => {},
  t: (a, b) => "",
});

const updateHTMLLangAttr = (lang: supportedLanguages) => {
  const htmlEl = document.querySelector("html");
  htmlEl?.setAttribute("lang", lang);
};

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: FC<LocalizationProviderProps> = (props) => {
  const { children } = props;

  const [lang, setLang] = useState(supportedLanguages.en);

  const changeLang: ChangeLang = useCallback((lang) => {
    setLang(lang);
  }, []);

  const t: T = useCallback(
    (key, params = {}) => {
      const { translate = true } = params;

      if (!translate || !(key in locales)) {
        return key;
      }

      return locales[key][lang];
    },
    [lang]
  );

  useEffect(() => {
    updateHTMLLangAttr(lang);
  }, [lang]);

  return (
    <LocalizationContext.Provider
      value={{
        lang,
        changeLang,
        t,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
