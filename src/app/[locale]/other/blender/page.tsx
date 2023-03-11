import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
import Map from "./map.jsx";
export default function Page() {
  const t = useTranslations("Other.blender");
  return <BackForward prev="/other">
    <h1>{t("title")}</h1>
    <p>{t("description")}</p>
    <Map />
  </BackForward>;
}