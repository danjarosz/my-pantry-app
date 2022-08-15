import type { HelmetConfig, HelmetTitle } from "./types";
import { useEffect, useState } from "react";
import { generateTitle } from "./utility/generateTitle";
import { initialConfig } from "./constants/config";

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
