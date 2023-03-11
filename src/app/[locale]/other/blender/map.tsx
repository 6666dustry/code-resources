import { Link, useTranslations } from "next-intl";
import MapTemplate from "@/components/links/map-template.jsx";
export default function Map({ deep }: { deep?: boolean; }) {
  const t = useTranslations("Other.blender");
  return <MapTemplate deep={deep} links={[{
    href: "/other/blender/fundamental",
    text: t("fundamental.title")
  }]} />;
}