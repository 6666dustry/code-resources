import MapTemplate from "@/components/links/map-template.jsx";
import { useTranslations } from "next-intl";
export default function Map({ deep }: { deep?: boolean; }) {
  const t = useTranslations("JavaScript.library.nextjs");
  const r = useTranslations("JavaScript.library.react");
  return <MapTemplate deep={deep} links={[{
    href: "/javascript/libraries/nextjs/making-website",
    text: t("making-website.title")
  }, {
    href: "/javascript/libraries/react/comment-out",
    text: r("comment-out.title")
  }]} />;
}