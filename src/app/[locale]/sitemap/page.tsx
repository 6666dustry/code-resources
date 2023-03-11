import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
import CSSMap from "../css/map.jsx";
import JavaScriptMap from "../javascript/map.jsx";
import OtherMap from "../other/map.jsx";

export default function Page() {
  const t = useTranslations("Other");
  return <BackForward prev="/">
    <h1>CSS</h1>
    <CSSMap deep />
    <br />
    <h1>JavaScript</h1>
    <JavaScriptMap deep />
    <br />
    <h1>{t("title")}</h1>
    <OtherMap deep />
  </BackForward>;
}