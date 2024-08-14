import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import resources from "./resources";

import type { InitOptions } from "i18next";

// eslint-disable-next-line @typescript-eslint/naming-convention
const i18nConfig: InitOptions = {
  fallbackLng: "en",
  ns: ["common"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
  resources,
};

void i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init(i18nConfig);

export { default } from "i18next";

export { i18nConfig };
