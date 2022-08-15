import { Lang } from "../types";
import { StoryContext, StoryFn } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { langStorageKey } from "../constants";
import { LocalizationProvider } from "../components";

const getLang = (langName: Lang) => {
  return langName || Lang.en;
};

const useLocalizationProvider = (Story: StoryFn, context: StoryContext) => {
  const generateId = useCallback(() => {
    return `${Math.random()}`;
  }, []);

  const lang = getLang(context.globals.lang);
  const [id, setId] = useState(generateId());

  useEffect(() => {
    localStorage.setItem(langStorageKey, lang);
    setId(generateId);
  }, [generateId, lang]);

  return (
    <LocalizationProvider key={id} initialLang={lang}>
      <Story {...context} />
    </LocalizationProvider>
  );
};

export default useLocalizationProvider;
