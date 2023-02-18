import React from "react";
import PrevNext from "./links/prev-next.jsx";
export default function BackForward({ children, className: style, next, prev, }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { children: React.ReactNode, prev?: string, next?: string; className?: string; }) {
  return <main>
    <PrevNext prev={prev} next={next} className={style} />
    {children}
    <PrevNext prev={prev} next={next} className={style} />
  </main>;
}