import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ar from './locales/ar.json';
import en from './locales/en.json';
import hi from './locales/hi.json';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  hi: {
    translation: hi,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  // language to use if translations in user language are not available.
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  debug: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: true,
    transSupportBasicHtmlNodes: false,
  },
});

export default i18n;
