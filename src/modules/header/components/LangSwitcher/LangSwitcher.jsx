'use client';

import { useLanguageChanger } from '@/i18n/utils/LanguageChanger';
import { LANGUAGES } from '@/modules/shared/constants';
import { useEffect, useRef, useState } from 'react';

const LangSwitcher = () => {
  const { currentLocale, handleChangeLanguage } = useLanguageChanger();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLanguageSelect = (newLocale) => {
    handleChangeLanguage(newLocale);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
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
  }, [isDropdownOpen]);

  return (
    <div className="" ref={dropdownRef}>
      <div>
        <ul className="flex gap-2 items-center">
          <li
            onClick={() => handleLanguageSelect(LANGUAGES.UA)}
            className={`items-center text-base font-medium flex gap-2 after:content-[''] after:block  after:w-0.5 after:h-5 after:bg-[#B3B3B3] after:bottom-0 ${
              currentLocale === LANGUAGES.UA
                ? 'text-[#DDD7CF]'
                : 'text-[#B3B3B3]'
            }`}
          >
            <span>UA</span>
          </li>
          <li
            onClick={() => handleLanguageSelect(LANGUAGES.EN)}
            className={`text-base font-medium ${
              currentLocale === LANGUAGES.EN
                ? 'text-[#DDD7CF]'
                : 'text-[#B3B3B3]'
            }`}
          >
            <span>EN</span>
          </li>
        </ul>
      </div>

      {/* {isDropdownOpen && (
        <div>
          <ul>
            <li onClick={() => handleLanguageSelect(LANGUAGES.UA)}>
              <span>UA</span>
            </li>
            <li onClick={() => handleLanguageSelect(LANGUAGES.EN)}>
              <span>EN</span>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default LangSwitcher;
