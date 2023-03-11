import { useTranslations } from "next-intl";
import MapTemplate from "@/components/links/map-template.jsx";
export default function Map({ deep }: { deep?: boolean; }) {
  const t = useTranslations("JavaScript.library.threejs");
  return <MapTemplate deep={deep} links={[
    {
      href: "/javascript/libraries/threejs/stamp/",
      text: t("stamp.title")
    }
  ]} />;
}