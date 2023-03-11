import Article from "@/components/article/article.jsx";
import Stamp from "./canvas.jsx";
import Artifact from "../artifact.jsx";
import modelGlb from "@blender/stamp/stamp.glb";
import modelGlTF from "@blender/stamp/stamp.gltf";
import modelBlend from "@blender/stamp/stamp.blend";
import { useLocale, useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("JavaScript.library.threejs.stamp");
  const locale = useLocale();
  return <Article tags={["Blender", "ThreeJS", "JavaScript"]} upload={new Date(2023, 2, 3)} prev="/javascript/libraries/threejs/">
    <h1>{t("title")}</h1>
    <Artifact locale={locale} DL={[{
      name: "stamp.blend", path: modelBlend
    }, {
      name: "stamp.glb", path: modelGlb
    }, {
      name: "stamp.gltf", path: modelGlTF
    }]}>
      <Stamp />
    </Artifact>
  </Article>;
}