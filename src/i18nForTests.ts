import * as i18n from 'i18next';
// import * as Backend from 'i18next-xhr-backend';
import * as LanguageDetector from 'i18next-browser-languagedetector';
// import { reactI18nextModule } from 'react-i18next';

const instance = i18n
  // .use(Backend)
  // .use(LanguageDetector)
  // .use(reactI18nextModule)
  .init({
    fallbackLng: 'cimode',
    debug: false,
    interpolation: { escapeValue: false },
    react: {
      wait: false,
      nsMode: 'fallback',
    },
  });

export default instance;
