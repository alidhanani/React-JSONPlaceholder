import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import stringConstant from './string.json';
import translation from './translation.json';

stringConstant.resources['en'] = translation;
i18n.use(initReactI18next).init(stringConstant);

export const Locale = () => {
  const { t } = useTranslation();
  return {
    t,
  };
};
