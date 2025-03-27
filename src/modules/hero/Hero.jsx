'use client';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../shared/components/Container/Container';

const Hero = () => {
  const { t } = useTranslation('hero');
  return (
    <section className="bg-[url('/image_background.png')] bg-cover bg-center  w-full h-[890px] pt-40">
      <Container>
        <div className="flex flex-col gap-16 pb-20 ">
          <h1 className="font-bold text-6xl text-[#FF9900] w-[948px]">
            {t('title')}
          </h1>
          <p className="text-[32px] w-[732px]"> {t('subtitle')}</p>
        </div>
        <Link
          href={'/'}
          className="flex  gap-2.5 bg-[#7C01F8] h-[64px] w-[408px] rounded-lg font-semibold uppercase text-2xl items-center py-5 px-10 justify-center"
        >
          {t('btn_text')}
          <img src="/icons/fly.svg" alt="Fly Icon" className="w-6" />
        </Link>
        <p className="pt-30 w-[680px] text-xl font-normal"> {t('desc')}</p>
      </Container>
    </section>
  );
};

export default Hero;
