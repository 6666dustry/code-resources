import BackForward from "@/components/links/back-forward.jsx";
import { Link, useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("Other.blender");
  return <BackForward prev="/other">
    <h1>{t("title")}</h1>
    <p>{t("description")}</p>
    <p><Link href="/other/blender/fundamental">{t("fundamental.title")}</Link></p>
  </BackForward>;
}