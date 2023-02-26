import Lang from "./lang.jsx";
import { NextIntlClientProvider } from 'next-intl';
import styles from "./switcher.module.scss";
export default function Switcher({ en, ja, locale, }: { locale: string; ja: string; en: string; }) {
  return <NextIntlClientProvider locale={locale}>
    <section className={styles.switcher}>
      <p>Language</p>
      <div className={styles.languages}>
        <p><Lang locale='ja'>{ja}</Lang></p>
        <p><Lang locale='en'>{en}</Lang></p>
      </div>
    </section>
  </NextIntlClientProvider>;
}