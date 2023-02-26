import { Link } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("JavaScript");
  return <BackForward prev="/">
    <h1>{t("title")}</h1>
    <section>
      <h2>{t("about.title")}</h2>
      <p>{t("about.description")}</p>
      <p>{t("about.using")}</p>
    </section>
    <h2>{t("about.list")}</h2>
    <ul><li> <Link href="/javascript/libraries">{t("library.title")}</Link></li></ul>
  </BackForward >;
}