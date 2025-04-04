import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { NAMESPACES } from '@/shared/constants';
import i18nConfig from '../../../i18nConfig';
import initTranslations from '@/i18n/utils/i18n';
import { TranslationsProvider } from '@/i18n/utils';
import ErrorBoundaryWithTranslation from '@/shared/components/ErrorBoundary/ErrorBoundaryWithTranslation/ErrorBoundaryWithTranslation';
import { dir } from 'i18next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'IT Academy RPG',
};

const i18nNamespaces = NAMESPACES;

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ErrorBoundaryWithTranslation>
            {children}
          </ErrorBoundaryWithTranslation>
          <div id="modal"></div>
        </body>
      </TranslationsProvider>
    </html>
  );
}
