import BackForward from "@/components/back-forward.jsx";
import * as Themes from "./themes/themes.js";
import styles from "./theme.module.scss";
import { useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("CSS.theme");
  return <BackForward prev="/css">
    <h1>{t("title")}</h1>
    <p>{t("description")}</p>
    <div className={styles.wrapper}>
      <Themes.rainbow.default />
    </div>
  </BackForward >;
}