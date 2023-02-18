'use client';
import styles from "./code.module.scss";
import { useEffect, useMemo, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-tsx.min";
import "prismjs/components/prism-scss.min";
import "prismjs/themes/prism-tomorrow.css";
export type languageType = "html" | "css" | "scss" | "js" | "jsx" | "tsx" | "plain";
export interface Language {
  language: languageType,
  children: string;
}
export default function Code({ children = "", defaultLang = "plain", languages }: { languages?: Language[], children?: string; defaultLang?: languageType; }) {
  const codeBlock = useRef<HTMLElement>(null);
  const defaultCode = Prism.highlight(children, Prism.languages[defaultLang ?? "plain"], defaultLang ?? "plain");
  const codes = useMemo(() => languages ? [defaultCode, ...languages.map(value => Prism.highlight(value.children, Prism.languages[value.language ?? "plain"], value.language ?? "plain"))] : defaultCode, [languages, defaultCode]);
  useEffect(() => {
    Prism.highlightAll();
    if (codeBlock.current) {
      if (Array.isArray(codes)) {
        codeBlock.current.innerHTML = codes[0];
      } else {
        codeBlock.current.innerHTML = codes;
      }
    }
  }, [codes]);
  let langList;
  if (languages) {
    const langs = [{ language: defaultLang, children: children }, ...languages].map((value, index) => <li key={value.language} onClick={() => {
      if (codeBlock.current) {
        codeBlock.current.innerHTML = codes[index];
      }
    }} role="presentation">{value.language ?? "plain"}</li>);

    langList = <ul className={styles.codeTypeList}>{...langs}</ul>;
  }

  return <div className={styles.codeDiv}>
    {langList}
    <pre className={styles.codePre}>
      <code className={styles.code} ref={codeBlock} >{children}</code>
    </pre></div>;
}