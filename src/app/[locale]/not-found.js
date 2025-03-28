'use client';

import Container from '@/shared/components/Container/Container';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation('notFound');

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <Container className="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-4xl font-bold text-red-600">
          {t('notFoundTitle')}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{t('notFoundMessage')}</p>
        <Link
          href="/"
          className="mt-6 inline-block text-blue-500 hover:text-blue-700 text-xl"
        >
          {t('backToHome')}
        </Link>
      </Container>
    </section>
  );
}
