import { Link } from "next-intl";
import { useTranslations } from "next-intl";
import styles from "./prev-next.module.scss";
export default function PrevNext({ className: style, next, prev, }: {
  prev?: string, next?: string;
  className?: string;
}) {
  const t = useTranslations();
  const Prev = prev ? <Link className={styles.prev} href={prev}>{t("prev-next.prev")}</Link> : null;

  const Next = next ? <Link className={styles.next} href={next}>{t("prev-next.next")}</Link> : null;

  return <div className={styles.linkDiv + " " + style}>
    {Prev}{Next}
  </div>;
}