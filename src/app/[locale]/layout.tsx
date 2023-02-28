import './globals.scss';
import { notFound } from 'next/navigation';
import Links from '@/components/links/all.jsx';
import { useLocale } from 'next-intl';
import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

interface Metadata { }
export async function generateMetadata() {
  const t = await getTranslations('meta');
  const head: Metadata = {};
  return {
    title: t('title'),
    description: t('description')
  };
};
type Props = {
  children: ReactNode;
  params: { locale: string; };
};

export default function RootLayout({ children, params }: Props) {
  const locale = useLocale();
  if (locale !== params.locale) {
    notFound();
  }
  return (
    <html lang={locale ?? "en"}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head >
        <meta name="google-site-verification" content="IzNuDEmkGfocetj9cImpUkSYjxuunoJy80Cl4lXq7Ys" />
      </head>
      <body>
        <header>
          <nav>
            {<Links />}
          </nav>
        </header>
        {children}
      </body>
    </html >
  );
}
