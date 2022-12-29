 
import i18n from 'i18next';
import React, { useEffect } from 'react'
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';
import ChildFunctionalComponent from './Child';


i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translations: {},
      },
    },
  });


const App = () => {

  const fetchTranslations = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json();
    return result.products[0];
  }

  const loadTranslations = async () => {
    const transResult = await fetchTranslations();
    console.log(transResult, 'api result');
    i18n
      .use(initReactI18next)
      .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
          escapeValue: false,
        },
        resources: {
          en: {
            translations: transResult,
          },
        },
      });
    i18n.addResourceBundle('en', 'translation', transResult);
  }
  
  useEffect(() => {
    loadTranslations(); 
  }, [])

  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <ChildFunctionalComponent />
      <div>
        {t('translations:title')}
      </div>
      <div>
        {t('translations:description')}
      </div>
    </I18nextProvider>
  )
}

export default App