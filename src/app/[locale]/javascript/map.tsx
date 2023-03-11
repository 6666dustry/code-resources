import { useTranslations } from "next-intl";
import { lazy } from "react";
import MapTemplate from "@/components/links/map-template.jsx";
const LibrariesMap = lazy(() => import("./libraries/map.jsx"));
export default function Map({ deep }: { deep?: boolean; }) {
  const t = useTranslations("JavaScript");
  return <MapTemplate links={[{
    href: "/javascript/libraries",
    text: t("library.title")
  }]} deep={deep} deepChildren={<LibrariesMap deep />} />;
}