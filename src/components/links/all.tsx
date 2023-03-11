import { Link } from "next-intl";
import styles from "./link.module.scss";
import html from "@/app/[locale]/html/style.module.scss";
import css from "@/app/[locale]/css/style.module.scss";
import javascript from "@/app/[locale]/javascript/style.module.scss";
import other from "@/app/[locale]/other/style.module.scss";
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
    <li className={html.html}><Link href="/html">HTML</Link></li>
    <li className={css.css}><Link href="/css">CSS</Link></li>
    <li className={javascript.javascript}><Link href="/javascript">Javascript</Link></li>
    <li className={other.other}><Link href="/other">Other</Link></li>
    <li><Switcher locale={locale} ja={t("ja")} en={t("en")} /></li>
  </ul>;
}