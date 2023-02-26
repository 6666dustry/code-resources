"use client";
import React from "react";
import styles from "./style.module.scss";
import { Canvas } from "@react-three/fiber";
function localeText(locale: string, filename: string) {
  let result: string;
  switch (locale) {
    case "ja":
      result = `${ filename } でダウンロード`;
      break;

    default:
      result = `Download as ${ filename }`;
      break;
  }
  return result;
}
export default function Artifact({ DL, children, description, locale }: {
  children: React.ReactNode; description?: React.ReactNode; DL?: {
    name: `${ string }.${ string }`;
    path: string;
  }[];
  locale: string;
}) {
  const DLs = DL ? DL?.map((d) => {
    const period = d.name.lastIndexOf(".");
    const extend = d.name.substring(period);
    return <a key={d.name} href={d.path} download={d.name}>{localeText(locale, extend)}</a>;
  }) : null;

  return <><div style={{ aspectRatio: 2 / 1 }}>
    <Canvas>
      {children}
    </Canvas>
  </div>
    <div>{description}</div>
    <div className={styles.dlLinks}>{DLs}</div>
  </>;
}
