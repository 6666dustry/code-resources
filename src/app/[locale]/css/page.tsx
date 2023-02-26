import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
import { Link } from "next-intl";
export default function Page() {
  let t = useTranslations("CSS");
  return <BackForward prev="/">
    <h1>{t("title")}</h1>
    <section>
      <h2>{t("about.title")}</h2>
      <p dangerouslySetInnerHTML={{ __html: t("about.description") }} />
    </section>
    <Link href="/css/theme">{t("theme.title")}</Link>
  </BackForward>;
}