import { Link, useTranslations } from "next-intl";
import React, { Suspense } from "react";
import LoadingSitemap from "../loading/sitemap.jsx";
export default function MapTemplate({ children, deep, deepChildren, links }: {
  links: { href: string, text: string; }[];
  children?: React.ReactNode[] | React.ReactNode;
  deep?: boolean;
  deepChildren?: React.ReactNode;
}) {
  const t = useTranslations("map");


  return <section>
    {deep || <h2>{t("list")}</h2>}
    <ul>{links.map((v, i) => {
      let Sitemap;
      if (deep && deepChildren) {
        if (Array.isArray(deepChildren)) {
          Sitemap = <Suspense fallback={<LoadingSitemap />} >
            {deepChildren[i]}
          </Suspense>;
        } else {
          Sitemap = <Suspense fallback={<LoadingSitemap />} >
            {deepChildren}
          </Suspense>;
        }
      }
      return <li key={v.text}>
        <p><Link href={v.href}>{v.text}</Link></p>
        {Sitemap}
      </li>;
    })}
      {children}
    </ul></section>;
}