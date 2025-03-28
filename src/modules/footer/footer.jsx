'use client';

import { useTranslation } from 'react-i18next';
import Container from '../shared/components/Container/Container';
import Link from 'next/link';
import Modal from '../shared/components/modal/modal';
import TeamList from './components/TeamList/TeamList';
import React, { useState, useEffect } from 'react';

const Footer = ({ params }) => {
  const { t, i18n } = useTranslation('footer');
  const [modalState, setModalState] = useState(false);
  const locale = React.use(params).locale; 
  useEffect(() => {
    const storedModalState = localStorage.getItem('modalState');
    if (storedModalState === 'open') {
      setModalState(true);
    }
  }, []);

  useEffect(() => {
    const storedModalState = localStorage.getItem('modalState');
    if (storedModalState === 'open') {
      setModalState(true);
    }
  }, [i18n.language]);

  useEffect(() => {
    if (modalState) {
      localStorage.setItem('modalState', 'open');
    } else {
      localStorage.setItem('modalState', 'closed');
    }
  }, [modalState]);

  const handleLanguageChange = (lng) => {
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng).then(() => {
      window.location.reload();
    });
  };

  const handleModalToggle = () => {
    setModalState(!modalState);
    handleLanguageChange(locale);
  };

  return (
    <footer className="xl:pb-[130px] xl:pt-[100px] md:pb-[80px] pb-15 pt-10 md:pt-10 bg-[#0D0121]">
      <Container className="flex flex-col md:gap-8 gap-5">
        <h2 className="text-[#FF9900] font-semibold text-3xl">{t('title')}</h2>
        <div className="flex xl:justify-between flex-col-reverse xl:flex-row md:gap-[60px] gap-10">
          <div className="flex xl:flex-col gap-8 md:justify-between">
            <ul className="flex flex-col md:gap-5 xl:gap-[30px] gap-4">
              <li className="flex gap-5">
                <div className="w-6 h-6 xl:w-8 xl:h-8">
                  <img
                    src="/icons/arcticons_fossify-phone.svg"
                    alt="Phone Icon"
                    className="w-6"
                  />
                </div>
                <Link
                  href={`tel:${t('contacts.phone')}`}
                  className="md:text-xl font-light text-base"
                  target="_blank"
                >
                  {t('contacts.phone')}
                </Link>
              </li>
              <li className="flex gap-5">
                <div className="w-6 h-6 xl:w-8 xl:h-8">
                  <img
                    src="/icons/arcticons_fairemail.svg"
                    alt="Email Icon"
                    className="w-6"
                  />
                </div>
                <Link
                  href={`mailto:${t('contacts.email')}`}
                  className="md:text-xl font-light text-base"
                  target="_blank"
                >
                  {t('contacts.email')}
                </Link>
              </li>
              <li className="flex gap-5">
                <div className="w-6 h-6 xl:w-8 xl:h-8">
                  <img
                    src="/icons/ph_microsoft-teams-logo-thin.svg"
                    alt="Teams Icon"
                    className="w-6"
                  />
                </div>
                <button
                  className="md:text-xl font-light text-base cursor-pointer"
                  type="button"
                  onClick={handleModalToggle}
                >
                  {t('contacts.team')}
                </button>
              </li>
              <li className="flex gap-5">
                <div className="w-6 h-6 xl:w-8 xl:h-8">
                  <img src="/icons/fly.svg" alt="Fly Icon" />
                </div>
                <Link
                  target="_blank"
                  href="https://t.me/tanoksa_bot"
                  className="md:text-xl font-light text-base"
                >
                  {t('contacts.telegram')}
                </Link>
              </li>
            </ul>
            <div className="md:flex gap-5 xl:hidden hidden ">
              <img src="/decor.png" alt="Decor" className="w-50" />
            </div>
          </div>
          <div className="flex flex-col xl:gap-6 md:gap-4 gap-3">
            <h5 className="font-medium xl:text-2xl md:text-xl text-base">
              {t('subtitle')}
            </h5>
            <p className="xl:w-[732px] font-normal text-base xl:text-xl ">
              {t('desc')}
            </p>
            <p className="xl:pt-2 md:pt-1 font-medium xl:text-2xl md:text-xl">
              {t('action')}
            </p>
          </div>
        </div>
      </Container>
      <Modal open={modalState} onClose={handleModalToggle}>
        <TeamList />
      </Modal>
    </footer>
  );
};

export default Footer;
