import { useTranslations } from "next-intl";
import T from "./theme.jsx";
export default function Theme(props: Parameters<typeof T>[0]) {
  const t = useTranslations("CSS.theme");
  return <T buttonText={t("try")}{...props} />;
}