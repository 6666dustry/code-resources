import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
import Shortcut from "./Shortcut.jsx";
export default function Page() {
  const t = useTranslations("Other.blender.fundamental");
  const s = useTranslations("Other.blender.fundamental.shortcuts");
  return <BackForward prev="/other/blender">
    <h1>{t("title")}</h1>
    <details>
      <summary>{s("title")}</summary>
      <ul>
        <Shortcut keys={["ctrl", "z"]}>{s("ctrlZ.description")}</Shortcut>
        <Shortcut keys="middleClick(wheel) drag ">{s("middleClick.description")}</Shortcut>

        <Shortcut keys={["ctrl", "shift", "z"]}>{s("ctrlZShift.description")}</Shortcut>
        <Shortcut keys={["ctrl", "s"]}>{s("ctrlS.description")}</Shortcut>
        <Shortcut keys="shift">{s("shift.description")}</Shortcut>
        <Shortcut keys="tab">{s("tab.description")}</Shortcut>
        <Shortcut keys="f">{s("f.description")}</Shortcut>
        <Shortcut keys="space">{s("space.description")}</Shortcut>
        <Shortcut keys="t">{s("t.description")}</Shortcut>
        <Shortcut keys="n">{s("n.description")}</Shortcut>

      </ul>
    </details>
  </BackForward>;
}