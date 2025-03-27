'use client';

import { useLanguageChanger } from '@/i18n/utils/LanguageChanger';
import { LANGUAGES } from '@/modules/shared/constants';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next'; 

const LangSwitcher = () => {
  const { currentLocale, handleChangeLanguage } = useLanguageChanger();
  const { i18n } = useTranslation(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLanguageChange = (lng) => {
    localStorage.setItem('language', lng);

    i18n.changeLanguage(lng).then(() => {
      handleChangeLanguage(lng);
      setIsDropdownOpen(false);
      window.location.reload();
    });
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage); 
    }

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscPress = (e) => {
      if (e.key === 'Escape' && isDropdownOpen) {
        setIsDropdownOpen(false);
        buttonRef.current.blur();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscPress);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [isDropdownOpen, i18n]);

  return (
    <div className="" ref={dropdownRef}>
      <div>
        <ul className="flex gap-2 items-center">
          <li
            onClick={() => handleLanguageChange(LANGUAGES.UA)}
            className={`items-center text-base font-medium flex gap-2 after:content-[''] after:block  after:w-0.5 after:h-5 after:bg-[#B3B3B3] after:bottom-0 ${
              currentLocale === LANGUAGES.UA
                ? 'text-[#DDD7CF]'
                : 'text-[#838282]'
            }`}
          >
            <span>UA</span>
          </li>
          <li
            onClick={() => handleLanguageChange(LANGUAGES.EN)}
            className={`text-base font-medium ${
              currentLocale === LANGUAGES.EN
                ? 'text-[#DDD7CF]'
                : 'text-[#838282]'
            }`}
          >
            <span>EN</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LangSwitcher;
