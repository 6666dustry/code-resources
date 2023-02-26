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
    // return <a key={d.name} href={d.path} download={d.name}>{localeText(locale, extend)}</a>;
    return <span key={d.name} role="presentation" onClick={() => {

      let link = document.createElement('a');
      link.href = d.path;
      link.download = d.name;
      link.click();
      fetch(d.path).then((v) =>
        v.blob()
      ).then((v) => {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(v);
        link.download = d.name;
        link.click();
      });
    }}>{localeText(locale, extend)}</span>;
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
