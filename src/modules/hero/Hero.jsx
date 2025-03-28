'use client';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../shared/components/Container/Container';

const Hero = () => {
  const { t } = useTranslation('hero');
  return (
    <section className="bg-[url('/image_background.png')] bg-cover bg-center h-[728px]  w-full md:h-[700px] xl:h-[890px] pt-27 md:pt-32 xl:pt-40">
      <Container>
        <div className="flex flex-col md:gap-6 xl:gap-16 xl:pb-20 md:pb-15">
          <h1 className="font-bold text-[28px] xl:text-6xl text-[#FF9900] xl:w-[948px] md:text-4xl md:w-[616px]">
            {t('title')}
          </h1>
          <p className="text-xl  xl:text-[32px] xl:w-[732px] md:text-2xl md:w-[504px]">
            {t('subtitle')}
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-col gap-15 xl:gap-30 md:gap-20 ">
          <Link
            href={'https://t.me/tanoksa_bot'}
            target="-blank"
            className="flex w-full  gap-2.5 bg-[#7C01F8] xl:h-[64px] xl:w-[408px] md:w-[328px] h-[60px] rounded-lg font-semibold uppercase xl:text-2xl md:text-xl items-center xl:py-5 xl:px-10 md:px-6 justify-center"
          >
            {t('btn_text')}
            <div className="w-6 h-6">
              <img src="/icons/fly.svg" alt="Fly Icon" className="w-6" />
            </div>
          </Link>
          <p className=" xl:w-[680px] xl:text-xl font-normal text-base md:w-[592]">
            {t('desc')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
