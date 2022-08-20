import type { HelmetConfig, HelmetTitle } from "./types";
import { useEffect, useState } from "react";
import { generateTitle } from "./utility/";
import { initialConfig } from "./constants";

export type UseHelmet = (
  providedTitle: HelmetTitle,
  config?: HelmetConfig
) => void;

export const useHelmet: UseHelmet = (providedTitle, config = initialConfig) => {
  const [title] = useState(generateTitle(providedTitle, config));

  useEffect(() => {
    document.title = title;
  }, [title]);
};
