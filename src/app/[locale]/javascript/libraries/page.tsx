import { Link } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
import { useTranslations } from "next-intl";
export default function Libraries() {
  const t = useTranslations("JavaScript.library");
  return <BackForward prev="/javascript">
    <h1>{t("title")}</h1>
    <section>
      <h2>{t("about.title")}</h2>
      <p>{t("about.description")}</p>
    </section>
    <section>
      <h2>{t("about.difference.title")}</h2>
      <p>{t.rich("about.difference.description")}</p>
    </section>
    <p>
      <Link href="/javascript/libraries/nextjs">Next.js</Link></p>
    <p>
      <Link href="/javascript/libraries/react">React</Link>
    </p>
    <p>
      <Link href="/javascript/libraries/threejs">Three.js</Link>
    </p>
  </BackForward>;
}