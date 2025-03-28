'use client';
import { useTranslation } from 'react-i18next';
import Container from '../../shared/components/Container/Container';
import Section from '../../shared/components/Section/Section';
import { forwardRef } from 'react';

const WhyItHaveValue = forwardRef(({}, ref) => {
  const { t } = useTranslation('investor');

  return (
    <Section id="investors" ref={ref}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-[#FF9900] font-semibold xl:text-3xl md:text-2xl">
          {t('title')}
        </h2>
        <ul className="flex flex-col gap-6 items-start">
          {t('cards', { returnObjects: true }).map((card, index) => (
            <li
              key={index}
              className={`flex items-center space-x-4 ${
                index === 1
                  ? 'xl:ml-100 md:ml-45'
                  : index === 2
                  ? 'xl:ml-210 md:ml-95'
                  : ''
              }`}
            >
              <div className=" md:w-15 md:h-15 xl:w-25 xl:h-25 w-12 h-12 min-w-12 ">
                <img src={card.icon} alt="icons" />
              </div>
              <p className="xl:text-2xl md:text-xl font-normal  max-w-[400px]">
                {card.desc}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
});

export default WhyItHaveValue;
