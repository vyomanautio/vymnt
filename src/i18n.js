import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      /* Generic  start*/
      "app.generic.sample": "Sample",
      "app.about.001": "VYOMANAUT (A PERSON WHO TRAVELS IN SPACE FOR THE INDIAN PROGRAM) IS A COLLECTION OF UNIQUE MERCHANDISE AND DIGITAL COLLECTIBLES TO BRING ALL SPACE ENTHUSIASTS AND FANS TOGETHER TO BUILD A COMMUNITY",
      "app.about.002": "A PRODUCT OF 1947IND, THE FIRST EVER CLOTHING BRAND TO OFFICIALLY PARTNER WITH ISRO TO CREATE ISRO MERCHANDISE, WE HAVE NOW GONE OVER AND ABOVE TO LAUNCH ISRO-APPROVED DIGITAL AND PHYSICAL COLLECTIBLES!",
      "app.about.003": "WITH THIS INITIATIVES, WE WANT TO SHINE THE LIMELIGHT ON THE UNDERDOG OF SPACE AGENCIES, THE INDIAN SPACE RESEARCH ORGANISATION - CONTRIBUTING TO HUMANITY AND SPACE TECH, INE MISSION AT A TIME. THEIR PRAGMATISM, DILIGENCE AND HONESTY DESERVE FAR MORE RECOGNITION AND APPLAUSE THAN THEY ACTUALLY GET.",
      "app.about.004": "SIT TIGHT AND COME RIDE WITH US INTO SPACE IN OUR ROCKET FUELLED BY INDIAN PRIDE, PASSION AND GRATITUDE",
      
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;