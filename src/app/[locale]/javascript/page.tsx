import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
import Map from "./map.jsx";
export default function Page() {
  const t = useTranslations("JavaScript");
  return <BackForward prev="/">
    <h1>{t("title")}</h1>
    <section>
      <h2>{t("about.title")}</h2>
      <p>{t("about.description")}</p>
      <p>{t("about.using")}</p>
    </section>
    <Map />
  </BackForward >;
}