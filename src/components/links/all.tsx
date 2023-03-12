import { Link } from "next-intl";
import styles from "./link.module.scss";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Switcher from "./switcher.jsx";
function Home() {
  return <li className={styles.dropdown}>
    <Link href="/">Home</Link>
    <span className={styles.hide}>
      <p><Link href="/sitemap">Sitemap</Link></p>
    </span></li>;
}

export default function Links() {
  const locale = useLocale();
  const t = useTranslations("Index");
  return <ul className={styles.nav}>
    <Home />
    <li ><Link href="/html">HTML</Link></li>
    <li ><Link href="/css">CSS</Link></li>
    <li ><Link href="/javascript">Javascript</Link></li>
    <li ><Link href="/other">Other</Link></li>
    <li><Switcher locale={locale} ja={t("ja")} en={t("en")} /></li>
  </ul>;
}