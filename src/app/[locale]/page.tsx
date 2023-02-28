import styles from './page.module.scss';
import { useTranslations } from 'next-intl';
import { Link } from 'next-intl';
export default function Home() {
  const t = useTranslations("Index");
  return <main>
    <h1 className={styles.h1}>{t("title")}</h1>
    <p className={styles.p}>{t.rich("description")}</p>
    <p>{t.rich("why")}</p>
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h1>HTML</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>Coming soon...</p>
          <p><Link href="/html">{t("see")}</Link></p>
        </details>
      </section>
      <section className={styles.section}>
        <h1>CSS</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>{t("CSS.detail")}</p>
          <p><Link href="/css">{t("see")}</Link></p>
        </details>
      </section>
      <section className={styles.section}>
        <h1>JavaScript</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>{t("JavaScript.detail")}</p>
          <p><Link href="/javascript">{t("see")}</Link></p>
        </details>
      </section>
      <section className={styles.section}>
        <h1>{t("Other.title")}</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>{t("Other.detail")}</p>
          <p><Link href="/other">{t("see")}</Link></p>
        </details>
      </section>
    </div>
    <section>
      <h2>{t("switch")}</h2>
      <ul>
        <li><Link href="/" locale='ja'>{t("ja")}</Link></li>
        <li><Link href="/" locale='en'>{t("en")}</Link></li>
      </ul>
    </section>

  </main>;
}
