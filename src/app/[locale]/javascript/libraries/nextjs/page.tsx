import Map from "./map.jsx";
import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
export default function NextJS() {
  const t = useTranslations("JavaScript.library.nextjs");
  const r = useTranslations("JavaScript.library.react");
  return <BackForward prev="/javascript/libraries" >
    <h1>Next.js</h1>
    <h2>{t("about.title")}</h2>
    <p>{t("about.description")}</p>
    <Map />
    <p> <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">{t("official")}</a></p>
  </BackForward>;
}