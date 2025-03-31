'use client';

import { useLanguageChanger } from '@/i18n/utils/LanguageChanger';
import { LANGUAGES } from '@/shared/constants';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
  const { currentLocale, handleChangeLanguage } = useLanguageChanger();
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    localStorage.setItem('language', lng);

    i18n.changeLanguage(lng).then(() => {
      handleChangeLanguage(lng);
    });
    // window.location.reload();
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div className="">
      <div>
        <ul className="flex gap-2 items-center">
          <li
            onClick={() => handleLanguageChange(LANGUAGES.UA)}
            className={`items-center text-base font-medium flex gap-2 after:content-[''] after:block  after:w-0.5 after:h-5 after:bg-[#B3B3B3] after:bottom-0 cursor-pointer ${
              currentLocale === LANGUAGES.UA
                ? 'text-[#DDD7CF]'
                : 'text-[#838282]'
            }`}
          >
            <span className="cursor-pointer">UA</span>
          </li>
          <li
            onClick={() => handleLanguageChange(LANGUAGES.EN)}
            className={`text-base font-medium cursor-pointer ${
              currentLocale === LANGUAGES.EN
                ? 'text-[#DDD7CF]'
                : 'text-[#838282]'
            }`}
          >
            <span className="cursor-pointer">EN</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LangSwitcher;
