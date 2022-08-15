import { Lang } from "../../types";
import { createContext } from "react";
import { ChangeLang, T } from "../../types";

export interface LocalizationContextInterface {
  lang: Lang;
  changeLang: ChangeLang;
  t: T;
}

export const LocalizationContext = createContext<LocalizationContextInterface>({
  lang: Lang.en,
  changeLang: (a) => {},
  t: (a, b) => "",
});
