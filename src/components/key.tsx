import styles from "./key.module.css";
export default function Key({ children }: { children: string | string[]; }) {
  const text = Array.isArray(children) ? children.join("+") : children;
  return <span className={styles.key}>{text}</span>;
}