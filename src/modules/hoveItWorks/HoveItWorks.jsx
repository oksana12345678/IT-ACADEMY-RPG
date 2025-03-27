'use client';

import { useTranslation } from 'react-i18next';
import Container from '../shared/components/Container/Container';
import Image from 'next/image';
import { forwardRef } from 'react';
import Section from '../shared/components/Section/Section';

const HoveItWorks = forwardRef(({}, ref) => {
  const { t } = useTranslation('howItWorks');

  return (
    <Section className="w-full flex flex-col gap-8" id="how_it_works" ref={ref}>
      <Container>
        <div className="flex flex-col gap-8">
          <h2 className="text-[#FF9900] font-semibold text-3xl">
            {t('title')}
          </h2>
          <p className="text-2xl font-medium">{t('subtitle')}</p>
        </div>
      </Container>
      <div className="w-full">
        <Image
          src="/roles_background.png"
          layout="responsive"
          width={1200}
          height={477}
          alt="roles"
        />
      </div>
      <Container>
        <ul className="flex justify-between">
          <li className="w-[300px] text-xl font-normal">
            <p>{t('avatar')}</p>
          </li>
          <li className="w-[300px] text-xl font-normal">
            <p>{t('adventurer')}</p>
          </li>
          <li className="w-[300px] text-xl font-normal">
            <p>{t('kingdom')}</p>
          </li>
        </ul>
      </Container>
    </Section>
  );
});

export default HoveItWorks;
