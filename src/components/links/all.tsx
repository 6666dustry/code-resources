import { Link } from "next-intl";
import styles from "./link.module.scss";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Switcher from "./switcher.jsx";

export default function Links() {
  const locale = useLocale();
  const t = useTranslations("Index");
  return <ul className={styles.nav}>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/html">HTML</Link></li>
    <li><Link href="/css">CSS</Link></li>
    <li><Link href="/javascript">Javascript</Link></li>
    <li><Link href="/other">Other</Link></li>
    {/* <li> <ul>
      <NextIntlClientProvider locale={locale}>
        <li><Lang locale='ja'>{t("ja")}</Lang></li>
        <li><Lang locale='en'>{t("en")}</Lang></li>
      </NextIntlClientProvider>
    </ul></li> */}
    <li><Switcher locale={locale} ja={t("ja")} en={t("en")} /></li>
  </ul>;
}