import Ar from "@/components/article.jsx";
import styles from "./style.module.scss";
export default function Article(props: Parameters<typeof Ar>[0]) {
  return <Ar {...props} className={styles.button} />;
}