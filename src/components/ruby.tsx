import React from "react";
import styles from "./ruby.module.css";
export default function Ruby({ children, disabled, ruby, }: { children: React.ReactNode; ruby: React.ReactNode; disabled?: boolean; }) {
  return disabled ? <span>{children}</span> : <ruby className={styles.translated}>{children} <rp>(</rp><rt className={styles.ruby}>{ruby}</rt><rp>)</rp> </ruby>;
}
