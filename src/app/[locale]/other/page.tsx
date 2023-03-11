import Map from "./map.jsx";
import { useTranslations } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
export default function Articles() {
  const t = useTranslations("Other");
  return <BackForward prev="/">
    <h1>{t("title")}</h1>
    <Map />
  </BackForward>;
}