import { Lang } from "../types";

interface Locales {
  [key: string]: {
    [Lang.en]: string;
    [Lang.pl]: string;
  };
}

const locales: Locales = {
  not_found_page_title: {
    [Lang.en]: "Not found",
    [Lang.pl]: "Nie znaleziono",
  },
  login_page_title: {
    [Lang.en]: "Login",
    [Lang.pl]: "Logowanie",
  },
  pantries_page_title: {
    [Lang.en]: "My pantries",
    [Lang.pl]: "Moje spiżarnie",
  },
  pantry_page_title: {
    [Lang.en]: "Pantry",
    [Lang.pl]: "Spiżarnia",
  },
  example_button: {
    [Lang.en]: "Example Button",
    [Lang.pl]: "Przykładowy przycisk",
  },
};

export default locales;
