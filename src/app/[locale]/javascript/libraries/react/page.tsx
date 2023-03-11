import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations, useLocale } from "next-intl";
import Map from "./map.jsx";
export default function Page() {
  const t = useTranslations("JavaScript.library.react");
  const locale = useLocale();
  return <BackForward prev="/javascript/libraries">
    <section>
      <h1>React</h1>
      <p>{t("description")}</p>
    </section>
    <Map />
    <section>
      <p>
        <a href={`https://${ locale }.reactjs.org/`}>{t("official")}</a>
      </p>
    </section>
  </BackForward>;
}