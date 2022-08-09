import { supportedLanguages } from "./utility";

interface Locales {
  [key: string]: {
    [supportedLanguages.en]: string;
    [supportedLanguages.pl]: string;
  };
}

const locales: Locales = {
  app_name: {
    [supportedLanguages.en]: "Pantry App",
    [supportedLanguages.pl]: "Moja Spiżarnia",
  },
  login: {
    [supportedLanguages.en]: "Login",
    [supportedLanguages.pl]: "Zaloguj się",
  },
};

export default locales;
