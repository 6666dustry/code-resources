import Theme from "../../theme-wrapper.jsx";
import styles from "./dark.module.scss";
import Code from "@/components/code.jsx";
import { useTranslations } from "next-intl";
export default function Rainbow() {
  const t = useTranslations("CSS.theme.dark");
  return <Theme className={styles.dark} description={<p>{t("description")}</p>} name={t("name")} ><Code defaultLang="scss" languages={
    [{
      language: "css", children: ``
    }]
  } >{``}</Code></Theme>;
}