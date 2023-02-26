import BackForward from "@/components/links/back-forward.jsx";
import Stamp from "./canvas.jsx";
import Artifact from "../artifact.jsx";
import modelGlb from "@blender/stamp/stamp.glb";
import modelGlTF from "@blender/stamp/stamp.gltf";
import modelBlend from "@blender/stamp/stamp.blend";
import { useLocale, useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("JavaScript.library.threejs.stamp");
  const locale = useLocale();
  return <BackForward prev="/javascript/libraries/threejs/">
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
  </BackForward>;
}