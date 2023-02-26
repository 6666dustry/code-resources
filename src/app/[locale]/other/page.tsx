import { Link } from "next-intl";
import { useTranslations } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
export default function Articles() {
  const t = useTranslations("Other");
  return <BackForward prev="/"><h1>{t("title")}</h1>
    <section>
      <ul>
        <li>
          <section>
            <h2>{t("party")}</h2>
            <ul>
              <li> <p><Link href="/other/pair-challenge-maker">{t("pairChallengeMaker.title")}</Link></p></li>
            </ul>
          </section>
        </li>
        <li><h3><Link href="/other/blender">{t("blender.title")}</Link> </h3></li>
      </ul>
    </section>
  </BackForward>;
}