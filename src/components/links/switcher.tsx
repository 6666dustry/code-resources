import Lang from "./lang.jsx";
import { NextIntlClientProvider } from 'next-intl';
export default function Switcher({ en, ja, locale, }: { locale: string; ja: string; en: string; }) {
  return <NextIntlClientProvider locale={locale}>
    <ul>
      <li><Lang locale='ja'>{ja}</Lang></li>
      <li><Lang locale='en'>{en}</Lang></li>
    </ul>
  </NextIntlClientProvider>;
}