import i18n, { init, reloadResources } from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import uzTranslation from "../public/Locals/uz.json";
import ruTranslation from "../public/Locals/ru.json";
import enTranslation from "../public/Locals/en.json";

i18n 

.use(initReactI18next)
.init({
   resources:{
    uz:{translation : uzTranslation},
    ru:{translation: ruTranslation},
    en:{translation:enTranslation},
   },
   lng:"en",
   fallbackLng:"uz",
   debug: true,
   interpolation: {
     escapeValue: false,
    
    },

})

export default i18n;
