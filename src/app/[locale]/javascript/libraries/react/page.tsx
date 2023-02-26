import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations, Link, useLocale } from "next-intl";
export default function Page() {
  const t = useTranslations("JavaScript.library.react");
  const locale = useLocale();
  return <BackForward prev="/javascript/libraries">
    <h1>{t("title")}</h1>
    <p>{t("description")}</p>
    <p><Link href="/javascript/libraries/react/comment-out">{t("comment-out.title")}</Link></p>
    <p>
      <a href={`https://${ locale }.reactjs.org/`}>{t("official")}</a>
    </p>
  </BackForward>;
}