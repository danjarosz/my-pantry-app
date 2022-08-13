import type { FC, ReactNode } from "react";
import type { ChangeLang, T } from "../../types";
import { useCallback, useEffect, useState } from "react";
import { LocalizationContext } from "../../context";
import { langStorageKey } from "../../constants";
import { Lang } from "../../types";
import locales from "../../translations";
import { getInitialLang, updateHtmlLangAttr } from "../../utility";

interface LocalizationProviderProps {
  children: ReactNode;
  initialLang?: Lang;
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
