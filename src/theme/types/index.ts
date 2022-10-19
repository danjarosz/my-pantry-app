import type { ReactNode } from "react";

export { Theme } from "./theme";

export type Children =
  | ReactNode
  | ReactNode[]
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];

export type Child = ReactNode | JSX.Element | string;
