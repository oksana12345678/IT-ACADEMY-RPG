import { forwardRef } from 'react';
import Container from '../../shared/components/Container/Container';
import { useTranslation } from 'react-i18next';
import Section from '../../shared/components/Section/Section';

const ForWho = forwardRef(({}, ref) => {
  const { t } = useTranslation('forWhoThis');

  return (
    <Section className="bg-[#060621] " ref={ref} id="for_who_this">
      <Container className="flex flex-col md:gap-8 gap-5">
        <h1 className="text-[#FF9900] font-semibold xl:text-3xl md:text-2xl ">
          {t('title')}
        </h1>
        <ul className="flex flex-col md:flex-row md:gap-28 gap-5 items-center justify-center">
          {t('cards', { returnObjects: true }).map((card, index) => (
            <li
              className="flex flex-col gap-2 md:gap-6 md:w-[400px]"
              key={index}
            >
              <h2 className="font-medium xl:text-2xl md:text-xl text-base ">
                {card.title}
              </h2>
              <p className="font-light xl:text-2xl text-base">{card.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
});

export default ForWho;
