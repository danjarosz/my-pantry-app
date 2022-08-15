import { Lang } from "../../types";
import { defaultLang } from "../../constants/";
import { restoreLangFromLocalStorage } from "../restoreLangFromLocalStorage";

export const getInitialLang = (initialLang?: Lang): Lang => {
  if (initialLang) return initialLang;

  const restoredLang = restoreLangFromLocalStorage();
  if (restoredLang) return restoredLang;

  return defaultLang;
};
