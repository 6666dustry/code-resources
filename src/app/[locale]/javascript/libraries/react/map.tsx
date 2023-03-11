import { Link, useTranslations } from "next-intl";
import MapTemplate from "@/components/links/map-template.jsx";
export default function Map({ deep }: { deep?: boolean; }) {
  const t = useTranslations("JavaScript.library.react");
  return <MapTemplate deep={deep} links={[{
    href: "/javascript/libraries/react/comment-out",
    text: t("comment-out.title")
  }]} />;
}