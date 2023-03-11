import styles from './page.module.scss';
import { useTranslations } from 'next-intl';
import { Link } from 'next-intl';
import Article from './articles.jsx';
export default function Home() {
  const t = useTranslations("Index");
  return <main>
    <h1 className={styles.h1}>{t("title")}</h1>
    <p className={styles.p}>{t.rich("description")}</p>
    <p>{t.rich("why")}</p>
    <Article />
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h1>HTML</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>Coming soon...</p>
        </details>
      </section>
      <section className={styles.section}>
        <h1>CSS</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>{t("CSS.detail")}</p>
        </details>
      </section>
      <section className={styles.section}>
        <h1>JavaScript</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>{t("JavaScript.detail")}</p>
        </details>
      </section>
      <section className={styles.section}>
        <h1>{t("Other.title")}</h1>
        <details>
          <summary>{t("detail")}</summary>
          <p>{t("Other.detail")}</p>
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
};
