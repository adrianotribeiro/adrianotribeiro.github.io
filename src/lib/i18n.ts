import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "../locales/en/translation.json"
import ptBR from "../locales/pt-BR/translation.json"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-BR",
    resources: {
      en: { translation: en },
      "pt-BR": { translation: ptBR },
    },
  })

export default i18n
