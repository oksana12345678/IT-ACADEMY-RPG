import { forwardRef } from 'react';
import Container from '../shared/components/Container/Container';
import { useTranslation } from 'react-i18next';
import Section from '../shared/components/Section/Section';

const ForWho = forwardRef(({}, ref) => {
  const { t } = useTranslation('forWhoThis');

  return (
    <Section className="bg-[#060621] " ref={ref} id="for_who_this">
      <Container className="flex flex-col gap-8">
        <h1 className="text-[#FF9900] font-semibold text-3xl">{t('title')}</h1>
        <ul className="flex  gap-28 items-center justify-center">
          {t('cards', { returnObjects: true }).map((card, index) => (
            <li className="flex flex-col gap-6 w-[400px]" key={index}>
              <h2 className="font-medium text-2xl ">{card.title}</h2>
              <p className="font-light text-2xl">{card.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
});

export default ForWho;
