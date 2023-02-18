import { useLocale, useTranslations } from "next-intl";
import Select from "./Select.jsx";
import styles from "./style.module.scss";
export default function Page() {
  const t = useTranslations("Other.pairChallengeMaker");
  const o = useTranslations("Other");
  const locale = useLocale();
  const attention = locale === "ja" ? null : <p>Attention:This system can not work well. <br />Because grammar is different from Japanese. <br />locale:{locale}</p>;

  return <main className={styles.main}>
    <h1>{t("title")}</h1>
    <Select placeholder={t("placeHolder")} start={t("lottery.title")} suffix={
      //this does not make error.But type checker reports error.
      //@ts-ignore
      t.raw("suffix")
    } texts={
      //too.
      //@ts-ignore
      o.raw("pairChallengeMaker")
    } />
    {attention}
    <details>
      <summary>
        <h2>{t("use")}</h2>
      </summary>
      <dl>
        <dt><h3>{t("add.title")}</h3></dt>
        <dd>{t("add.description")}</dd>
        <dt><h3>{t("remove.title")}</h3></dt>
        <dd>{t("remove.description")}</dd>
        <dt><h3>{t("edit.title")}</h3></dt>
        <dd>{t("edit.description")}</dd>
        <dt><h3>{t("lottery.title")}</h3></dt>
        <dd>{t("lottery.description")}</dd>
      </dl>
    </details>
  </main>;
}