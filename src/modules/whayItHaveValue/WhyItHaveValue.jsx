'use client';
import { useTranslation } from 'react-i18next';
import Container from '../shared/components/Container/Container';
import Section from '../shared/components/Section/Section';
import Image from 'next/image';

const WhyItHaveValue = () => {
  const { t } = useTranslation('investor');

  return (
    <Section>
      <Container className="flex flex-col gap-6">
        <h2 className="text-[#FF9900] font-semibold text-3xl">{t('title')}</h2>
        <ul className="flex flex-col gap-6">
          {t('cards', { returnObjects: true }).map((card, index) => (
            <li
              key={index}
              className={`flex items-center space-x-4 ${
                index === 1 ? 'ml-100' : index === 2 ? 'ml-210' : ''
              }`}
            >
              <Image src={card.icon} width={100} height={100} alt="icons" />
              <p className="text-2xl font-normal max-w-[400px]">{card.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default WhyItHaveValue;
