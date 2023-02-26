import { Link } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
export default function NextJS() {
  const t = useTranslations("JavaScript.library.nextjs");
  const r = useTranslations("JavaScript.library.react");
  return <BackForward prev="/javascript/libraries" >
    <h1>Next.js</h1>
    <h2>{t("about.title")}</h2>
    <p>{t("about.description")}</p>
    <ul>
      <li> <p><Link href="/javascript/libraries/nextjs/making-website">{t("making-website.title")}</Link></p></li>
      <li><p><Link href="/javascript/libraries/react/comment-out">{r("comment-out.title")}</Link></p></li>
    </ul>
    <p> <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">{t("official")}</a></p>
  </BackForward>;
}