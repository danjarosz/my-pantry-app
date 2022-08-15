import { useContext } from "react";
import { LocalizationContext } from "../../context";

export const useTranslation = () => useContext(LocalizationContext);
