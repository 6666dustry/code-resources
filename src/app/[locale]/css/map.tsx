import MapTemplate from "@/components/links/map-template.jsx";
import { useTranslations } from "next-intl";
export default function Map({ deep }: { deep?: boolean; }) {
  const t = useTranslations("CSS");
  return <MapTemplate deep={deep} links={[{
    href: "/css/theme",
    text: t("theme.title")
  }]} />;
}