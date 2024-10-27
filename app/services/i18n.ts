import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'locales/en.json';
import es from 'locales/es.json';
import fr from 'locales/fr.json';
import hi from 'locales/hi.json';
import id from 'locales/id.json';
import mr from 'locales/mr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mr: { translation: mr },
    hi: { translation: hi },
    id: { translation: id },
    fr: { translation: fr },
    es: { translation: es },
  },
  lng: 'mr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  compatibilityJSON: 'v3',
});

export default i18n;
