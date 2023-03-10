import { Link } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
import Map from "./map.jsx";
export default function Libraries() {
  const t = useTranslations("JavaScript.library");
  return <BackForward prev="/javascript">
    <h1>{t("title")}</h1>
    <section>
      <h2>{t("about.title")}</h2>
      <p>{t("about.description")}</p>
    </section>
    <section>
      <h2>{t("about.difference.title")}</h2>
      <p>{t.rich("about.difference.description")}</p>
    </section>
    <Map />
  </BackForward>;
}