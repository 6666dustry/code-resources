import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
import Map from "./map.jsx";
export default function Page() {
  const t = useTranslations("JavaScript.library.threejs");
  return <BackForward prev="/javascript/libraries/">

    <h1>Three.js</h1>
    <p>{t("description")}</p>
    <Map />
    <p><a href="https://threejs.org" target="_blank" rel="noopener noreferrer">{t("official")}</a></p>
  </BackForward>;
}