
import React from "react";
// import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ChildFunctionalComponent = () => {
  const { t, } = useTranslation();
  return (
    <div> 
      {t('translation:category')}
      <div>
        {t('translation:description')}
      </div>
    </div>
  );
}

export default ChildFunctionalComponent;