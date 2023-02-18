"use client";
import styles from "./theme.module.scss";
/**
 * 
 * @param children children must be 
 * ```
 * <Code></Code>
 * ```
 * tag.
 * @returns 
 */
export default function Theme({ buttonText = "", children, className, description, name, }: { children: JSX.Element; className: string; name: string; description?: React.ReactNode; buttonText?: string; }) {
  return <details className={styles.details}>
    <summary><section className={className + " " + styles.showcase}>
      <h2 className={styles.h2}>{name}</h2>
      <p>I`&apos;`m paragraph!</p>
      <button className={styles.button} onClick={() => {
        document.querySelector("html")?.classList.add(className);
      }} type="button" >{buttonText}</button>
    </section>
    </summary>
    {description}
    {children}
  </details>;
}
