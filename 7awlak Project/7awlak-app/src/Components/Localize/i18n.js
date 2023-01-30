import { initReactI18next } from "react-i18next";
import  LanguageDetector  from 'i18next-browser-languagedetector';
import i18n  from 'i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: require("./Translation/en.json"),
      },
      ar: {
        translations: require("./Translation/ar.json"),
      },
    },
    lng:localStorage.getItem('i18nextLng')|| "en",
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

