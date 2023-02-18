import styles from "./code.module.scss";
export default function InlineCode({ children }: { children: string; }) {
  return <code className={styles.inlineCode}>{children}</code>;
}