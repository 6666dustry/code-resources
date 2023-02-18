import { Link } from "next-intl";
import { useTranslations } from "next-intl";
export default function Articles() {
  const t = useTranslations("Other");
  return <main><h1>{t("title")}</h1><p><Link href="/other/pair-challenge-maker">{t("pairChallengeMaker.title")}</Link></p>
    {/* <p><Link href="/other/pair-challenge-maker-ver2">ペアお題メーカーVer2</Link></p>*/}</main>;
}