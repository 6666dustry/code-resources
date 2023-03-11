import * as Themes from "./themes/themes.js";
import styles from "./theme.module.scss";
import { useTranslations } from "next-intl";
import Article from "@/components/article/article.jsx";
export default function Page() {
  const t = useTranslations("CSS.theme");
  return <Article upload={new Date(2023, 2, 2)} prev="/css">
    <h1>{t("title")}</h1>
    <p>{t("description")}</p>
    <div className={styles.wrapper}>
      <Themes.rainbow.default />
    </div>
  </Article >;
}