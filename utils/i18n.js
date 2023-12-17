import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
        }
      },
      pl: {
        translation: {
          "welcome": "Witamy",
          "Hello User!" : "Dzień dobry, użytkowniku!",
          "Find your perfect job!": "Znajdź pracę o której marzysz...",
          "What are you looking for?": "Czego szukasz?",
          "Popular jobs": "Popularne oferty",
          "Show all": "Pokaż wszystkie",
          "Something went wrong": "Coś poszło nie tak...",
          "About the job:": "O pracę:",
          'Qualifications': "Kwalifikacje",
          "Responsibilities": "Odpowiedzialności",
          // more Polish translations...
        }
      }
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;