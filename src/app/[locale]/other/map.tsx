import { Link, useTranslations } from "next-intl";
import LoadingSitemap from "@/components/loading/sitemap.jsx";
import { lazy, Suspense } from "react";
const BlenderMap = lazy(() => import("./blender/map.jsx"));
export default function Map({ deep }: { deep?: boolean; }) {
  const t = useTranslations("Other");
  const map = useTranslations("map");
  return <section>
    {deep || <h2>{map("list")}</h2>}
    <ul>
      <li>
        <section>
          <h2>{t("party")}</h2>
          <ul>
            <li> <p><Link href="/other/pair-challenge-maker">{t("pairChallengeMaker.title")}</Link></p></li>
          </ul>
        </section>
      </li>
      <li><h3><Link href="/other/blender">{t("blender.title")}</Link> </h3>
        {deep &&
          <Suspense fallback={<LoadingSitemap />}>
            <BlenderMap deep />
          </Suspense>
        }
      </li>
    </ul></section>;
}