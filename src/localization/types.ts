export enum Lang {
  en = "en",
  pl = "pl",
}

export type ChangeLang = (lang: Lang) => void;

export interface TParams {
  translate?: boolean;
}

export type T = (key: string, params?: TParams) => string;
