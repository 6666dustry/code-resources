import React from "react";
import PrevNext from "../links/prev-next.jsx";
import BackForward from "../links/back-forward.jsx";
import { category } from "./category.js";
export default function Article({ children, className, edit, tags, upload, warn: isWarn, ...prevAndNext }: {
  children: React.ReactNode; className?: string; upload: Date; edit?: {
    time: Date;
    summary: string;
  }[];
  tags?: (keyof typeof category)[];
  warn?: boolean;
} & Parameters<typeof PrevNext>[0]) {
  const times = edit?.map(v => v.time.getTime()) ?? [];
  const warn = Date.now() - Math.max(upload.getTime(), ...times) > 365 * 24 * 60 * 60 * 1000 ? <h2>この記事は更新から一年以上経過していますので、情報が古くなっている可能性があります。</h2> : null;
  const tagList = tags ? tags.map((v) => <li key={v}>{category[v].name}</li>) : null;
  return <>
    {isWarn && warn}
    {`${ upload.getFullYear() }/${ upload.getMonth() + 1 }/${ upload.getDate() }`}
    <BackForward {...prevAndNext}{...{ children, className }}>
      {children}
    </BackForward>
    <ul>{tagList}</ul>
  </>;
}