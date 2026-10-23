import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import titleBarEN from "./locale/en/title-bar.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof baseResource;
  }
}

export const baseResource = {
  "title-bar": titleBarEN,
} as const;

const resources = {
  en: {
    "title-bar": titleBarEN,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: [""],
  fallbackLng: "",
  defaultNS: "",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
