import { langStorageKey } from "../constants";
import { Lang } from "../types";

export const restoreLangFromLocalStorage = () => {
  const restoredLang = localStorage.getItem(langStorageKey);

  if (!restoredLang) return null;

  if (restoredLang in Lang) {
    return restoredLang as Lang;
  } else {
    return null;
  }
};
