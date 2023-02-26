import BackForward from "@/components/links/back-forward.jsx";
import { Link } from "next-intl";
import { useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("JavaScript.library.threejs");
  return <BackForward prev="/javascript/libraries/">
    <h1>Three.js</h1>
    <p>{t("description")}</p>
    <Link href="/javascript/libraries/threejs/stamp/">{t("stamp.title")}</Link>
  </BackForward>;
}