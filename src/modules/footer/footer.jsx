import { useTranslation } from 'react-i18next';
import Container from '../shared/components/Container/Container';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../shared/components/modal/modal';
import TeamList from './components/TeamList/TeamList';

const Footer = () => {
  const { t } = useTranslation('footer');
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <footer className="pb-[130px] pt-[100px] bg-[#0D0121]">
      <Container className="flex justify-between">
        <div className="flex flex-col gap-8">
          <h2 className="text-[#FF9900] font-semibold text-3xl">
            {t('title')}
          </h2>
          <ul className="flex flex-col gap-[30px]">
            <li className="flex gap-5">
              <img
                src="/icons/arcticons_fossify-phone.svg"
                alt="Fly Icon"
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
                alt="email"
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
                alt="Fly Icon"
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
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="font-medium text-2xl">{t('subtitle')}</h5>
          <p className="w-[732px] font-normal text-xl">{t('desc')}</p>
          <p className="pt-2 font-medium text-2xl">{t('action')}</p>
        </div>
      </Container>
      <Modal className="" open={isOpen} onClose={toggleModal}>
        <TeamList/>
      </Modal>
    </footer>
  );
};

export default Footer;
