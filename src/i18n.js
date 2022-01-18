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
      "app.watch.discription" : "CREATIVELY DESIGNED ISRO OFFICIAL, WRISTWATCH FOR THE SPACE GEEK IN YOU!",
      "app.watch.card" : "UNIQUE,COOL,AND LIMITED EDITION, THESE SUPER SPACE GEEK CARDS ARE GOING TO BE VIDEO COLLECTABLES SHOWCASING DIFFERENT ISRO PROJECTS.",
      "app.watch.card2" : "THESE CARDS WILL BE HANDED OUT TO A LUCKY FEW, WHO WILL GET TO CHOOSE THEIR VERY OWN ISRO WATCH, ACCESS VYOMANAUT MERCHANDISE,GET FREE NFTS AND AIR-DROPPED WATCH",
      "app.stagemap.s1":"A ROCKETRY PROJECT, WHERE WE AIR-DROP NFTS OF AN ISRO ROCKET MODEL TO OUR COMMUNITY. YOUR TASK IS SIMPLE! COLLECT ALL THE PARTS AND ASSEMBLE THE ISRO ROCKET AND WE WILL SEND THE ACTUAL METAL ISRO ROCKET NFT!",
      "app.stagemap.s2":"WE RELEASE OFFICIAL LIMITED EDTION MERCHANDISE CUSTOMISED FOR OUR NFT HOLDER- EVERY MERCH WILL HAVE A UNIQUE TRANSACTION TOKEN NUMBER PRINTED TO ENSURE AUTHENTICITY AND OWNERSHIP",
      "app.stagemap.s3":"WE WILL BE MAKING DIGITAL ISRO WATCH COLLECTIBLES WITH UNIQUE PRINTS, ENGRAVINGS, CASINGS AND MORE!",
      "app.stagemap.s4":"ENTRY INTO THE NEW WORLD OF METAVERSE! WE WILL MINT OUT DIGITAL COLLECTIBLES AND RELEASE THEM INTO THE UNIVERSE OF METAVERSE.",
      "app.stagemap.s5":"WE WILL BE BUILDING A VR MUSEUM, WHICH WILL BE AN WDUCATIONAL APP THAT WOULD GIVE INSIGHTFUL INFORMATION, FACTS, FIGURES AND VISUALS ON THE INDIAN SPACE INDUSTRY, INCLUDING ISRO AND ITS ACHIEVEMENTS, HISTORICAL PROJECTS AND THEIR WORKS.",
      "app.stagemap.s6":"OUT KINGDOM IS READY! A VIBRANT AND DYNAMIC COMMUNITY OF SPACE ENTHUSIASTS, GEEKS AND AFICIONADOS CELEBRATING INDIA’S FEAST IN SPACE.",
      "app.start.minting":"START MINTING NOW",
      "app.super.geek.card":"SUPER SPACE GEEK CARD",
      "app.isro.watch.official":"ISRO OFFICIAL WRISTWATCH",
      "app.team.founder":"FOUNDER",
      "app.team.community.dev":"COMMUNITY DEVELOPER",
      "app.team.web.dev":"WEB DEVELOPER",
      "app.team.content.dev":"CONTENT DEVELOPER",
      "app.stage1":"STAGE 1",
      "app.stage1,label":"VYOMANAUT ON EARTH",
      "app.stage2":"STAGE 2",
      "app.stage2.label":"WELCOME TO PERIORBITAL ATMOSPHERE",
      "app.stage3":"STAGE 3",
      "app.stage3.label":"SPACING OUT? NOPE! CHECK THE TIME",
      "app.stage4":"STAGE 4",
      "app.stage4.label":"UNIVERSE OF METAVERSE",
      "app.stage5":"STAGE 5",
      "app.stage5.label":"A HISTORIC WALKTHROUGH",
      "app.stage6":"STAGE 6",
      "app.stage6.label":"EVOLUTION OF THE COMMUNITY",
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