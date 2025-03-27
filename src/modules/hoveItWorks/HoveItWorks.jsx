'use client';

import { useTranslation } from 'react-i18next';
import Container from '../shared/components/Container/Container';
import Image from 'next/image';
import { forwardRef } from 'react';
import Section from '../shared/components/Section/Section';

const HoveItWorks = forwardRef(({}, ref) => {
  const { t } = useTranslation('howItWorks');

  return (
    <Section
      className="w-full flex flex-col md:gap-8 gap-4"
      id="how_it_works"
      ref={ref}
    >
      <Container>
        <div className="flex flex-col md:gap-8 gap-5">
          <h2 className="text-[#FF9900] font-semibold text-xl xl:text-3xl md:text-2xl">
            {t('title')}
          </h2>
          <p className="text-base xl:text-2xl md:text-xl font-medium">
            {t('subtitle')}
          </p>
        </div>
      </Container>
      <div className="md:block hidden w-full">
        <Image
          src="/roles_background.png"
          layout="responsive"
          width={1200}
          height={477}
          alt="roles"
        />
      </div>
      <Container>
        <ul className="flex flex-col md:justify-between md:flex-row gap-8">
          <li className=" md:hidden text-base  font-light flex flex-col gap-3">
            <Image
              src="/adventurer.png"
              layout="responsive"
              width={1200}
              height={477}
              alt="roles"
            />
            <p>{t('adventurer')}</p>
          </li>
          <li className="xl:w-[300px] md:w-50 xl:text-xl text-base font-light md:font-normal flex flex-col gap-3">
            <div className="md:hidden ">
              <Image
                src="/avatarB.png"
                layout="responsive"
                width={1200}
                height={477}
                alt="roles"
                className="md:hodden"
              />
            </div>

            <p>{t('avatar')}</p>
          </li>
          <li className="xl:w-[300px] md:w-50 xl:text-xl md:text-base font-normal hidden md:block">
            <p>{t('adventurer')}</p>
          </li>
          <li className="xl:w-[300px] md:w-50 xl:text-xl text-base font-light md:font-normal flex flex-col gap-3">
            <div className="md:hidden ">
              <Image
                src="/kingdom.png"
                layout="responsive"
                width={1200}
                height={477}
                alt="roles"
              />
            </div>
            <p>{t('kingdom')}</p>
          </li>
        </ul>
      </Container>
    </Section>
  );
});

export default HoveItWorks;
