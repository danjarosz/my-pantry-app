import { Lang } from "../types";
import { langStorageKey } from "../constants";

export const updateHtmlLangAttr = (lang: Lang) => {
  document.documentElement.setAttribute(langStorageKey, lang);
};
