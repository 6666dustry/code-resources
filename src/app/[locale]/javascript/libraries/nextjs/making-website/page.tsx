import { Link } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
export default function Articles() {
  const t = useTranslations("JavaScript.library.nextjs.making-website");
  return <BackForward prev="/javascript/libraries/nextjs">
    <h1>{t("title")}</h1>
    <p>{t("description")}</p>
    <ol>
      <li><Link href="/javascript/libraries/nextjs/making-website/start-launch">{t("start-launch.title")}</Link></li>
      <li><Link href="/javascript/libraries/nextjs/making-website/make-sub-page">{t("make-sub-page.title")}</Link></li>
    </ol>
  </BackForward >;
}