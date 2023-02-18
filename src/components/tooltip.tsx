import * as React from "react";
import styles from "./tooltip.module.css";
export default function Tooltip(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return <span {...props} className={props.className + " " + styles.tooltip} />;
}