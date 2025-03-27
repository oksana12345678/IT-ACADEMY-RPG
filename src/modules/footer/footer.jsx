'use client';
import { useTranslation } from 'react-i18next';
import Container from '../shared/components/Container/Container';
import Link from 'next/link';
import Modal from '../shared/components/modal/modal';
import TeamList from './components/TeamList/TeamList';
import { useModal } from '../shared/hooks/ModalContext';

const Footer = () => {
  const { t, i18n } = useTranslation('footer');
  const { isModalOpen, toggleModal } = useModal();
  

  return (
    <footer className="xl:pb-[130px] xl:pt-[100px] md:pb-[80px] pb-15 pt-10 md:pt-10 bg-[#0D0121]">
      <Container className="flex flex-col md:gap-8 gap-5">
        <h2 className="text-[#FF9900] font-semibold text-3xl">{t('title')}</h2>
        <div className="flex xl:justify-between flex-col-reverse xl:flex-row  md:gap-[60px] gap-10 ">
          <div className="flex xl:flex-col  gap-8 md:justify-between">
            <ul className="flex flex-col md:gap-5 xl:gap-[30px] gap-4">
              <li className="flex gap-5">
                <img
                  src="/icons/arcticons_fossify-phone.svg"
                  alt="Phone Icon"
                  className="w-6"
                />
                <Link
                  href={`tel:${t('contacts.phone')}`}
                  className="text-xl font-light"
                  target="_blank"
                >
                  {t('contacts.phone')}
                </Link>
              </li>
              <li className="flex gap-5">
                <img
                  src="/icons/arcticons_fairemail.svg"
                  alt="Email Icon"
                  className="w-6"
                />
                <Link
                  href={`mailto:${t('contacts.email')}`}
                  className="text-xl font-light"
                  target="_blank"
                >
                  {t('contacts.email')}
                </Link>
              </li>
              <li className="flex gap-5">
                <img
                  src="/icons/ph_microsoft-teams-logo-thin.svg"
                  alt="Teams Icon"
                  className="w-6"
                />
                <button
                  className="text-xl font-light cursor-pointer"
                  type="button"
                  onClick={toggleModal}
                >
                  {t('contacts.team')}
                </button>
              </li>
              <li className="flex gap-5">
                <img src="/icons/fly.svg" alt="Fly Icon" className="w-6" />
                <Link
                  target="_blank"
                  href="https://t.me/itacademy_rpg"
                  className="text-xl font-light"
                >
                  {t('contacts.telegram')}
                </Link>
              </li>
            </ul>
            <div className="md:flex gap-5 xl:hidden hidden">
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
      <Modal open={isModalOpen} onClose={toggleModal}>
        <TeamList />
      </Modal>
    </footer>
  );
};

export default Footer;
