import React from "react";
import PrevNext from "./links/prev-next.jsx";
import styles from "./article.module.scss";
import BackForward from "./back-forward.jsx";
export default function Article({ children, className, lastEdit, ...prevAndNext }: { children: React.ReactNode; className?: string; lastEdit: Date; } & Parameters<typeof PrevNext>[0]) {
  const warn = Date.now() - lastEdit.getTime() > 365 * 24 * 60 * 60 * 1000 ? <h2>この記事は更新から一年以上経過していますので、情報が古くなっている可能性があります。</h2> : null;
  return <>
    {warn}
    {`${ lastEdit.getFullYear() }/${ lastEdit.getMonth() + 1 }/${ lastEdit.getDate() }`}
    <BackForward {...prevAndNext}{...{ children, className }}>
      <article >
        {children}
      </article>
    </BackForward>
    <main className={className + " " + styles.article} />
  </>;
}