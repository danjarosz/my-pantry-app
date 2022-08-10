import { createContext, useCallback, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import locales, { supportedLanguages } from "./locale";

//----------------------
// CONTEXT
//----------------------

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

//----------------------
// HELPERS
//----------------------

const updateHtmlLangAttr = (lang: supportedLanguages) => {
  document.documentElement.setAttribute("lang", lang);
};

const restoreLangFromLocalStorage = () => {
  const restoredLang = localStorage.getItem("lang");

  if (!restoredLang) return;

  if (restoredLang in supportedLanguages) {
    return restoredLang as supportedLanguages;
  }
};

const getInitialLang = (
  initialLang?: supportedLanguages
): supportedLanguages => {
  if (initialLang) return initialLang;

  const restoredLang = restoreLangFromLocalStorage();
  if (restoredLang) return restoredLang;

  return supportedLanguages.en;
};

//----------------------
// Localization Provider
//----------------------

interface LocalizationProviderProps {
  children: ReactNode;
  initialLang?: supportedLanguages;
}

export const LocalizationProvider: FC<LocalizationProviderProps> = (props) => {
  const { children, initialLang } = props;

  const [lang, setLang] = useState(getInitialLang(initialLang));

  const changeLang: ChangeLang = useCallback((lang) => {
    setLang(lang);
  }, []);

  const t: T = useCallback(
    (key, params = {}) => {
      const { translate = true } = params;

      if (!translate || !(key in locales)) {
        console.error(`Translation key not found: ${key} in ${lang}`);
        return key;
      }

      return locales[key][lang];
    },
    [lang]
  );

  useEffect(() => {
    updateHtmlLangAttr(lang);
    localStorage.setItem("lang", lang);
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
