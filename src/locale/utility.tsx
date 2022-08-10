import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { FC, ReactNode } from "react";
import locales, { supportedLanguages } from "./locale";

export const langStorageKey = "lang";
export const defaultLang = supportedLanguages.en;

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

export const updateHtmlLangAttr = (lang: supportedLanguages) => {
  document.documentElement.setAttribute(langStorageKey, lang);
};

export const restoreLangFromLocalStorage = () => {
  const restoredLang = localStorage.getItem(langStorageKey);

  if (!restoredLang) return null;

  if (restoredLang in supportedLanguages) {
    return restoredLang as supportedLanguages;
  } else {
    return null;
  }
};

export const getInitialLang = (
  initialLang?: supportedLanguages
): supportedLanguages => {
  if (initialLang) return initialLang;

  const restoredLang = restoreLangFromLocalStorage();
  if (restoredLang) return restoredLang;

  return defaultLang;
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
    localStorage.setItem(langStorageKey, lang);
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

export const useTranslation = () => useContext(LocalizationContext);
