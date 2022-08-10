export enum supportedLanguages {
  en = "en",
  pl = "pl",
}

interface Locales {
  [key: string]: {
    [supportedLanguages.en]: string;
    [supportedLanguages.pl]: string;
  };
}

const locales: Locales = {
  not_found_page_title: {
    [supportedLanguages.en]: "Not found",
    [supportedLanguages.pl]: "Nie znaleziono",
  },
  login_page_title: {
    [supportedLanguages.en]: "Login",
    [supportedLanguages.pl]: "Logowanie",
  },
  pantries_page_title: {
    [supportedLanguages.en]: "My pantries",
    [supportedLanguages.pl]: "Moje spiżarnie",
  },
  pantry_page_title: {
    [supportedLanguages.en]: "Pantry",
    [supportedLanguages.pl]: "Spiżarnia",
  },
};

export default locales;
