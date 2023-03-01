import Article from "@/components/article/article.jsx";
import Code from "@/components/code.jsx";
import { useTranslations } from "next-intl";
export default function Articles() {
  const t = useTranslations("JavaScript.library.nextjs.making-website.make-sub-page");
  return <Article upload={new Date(2023, 1, 12)} prev="/javascript/libraries/nextjs/making-website/start-launch" >
    <h1>{t("title")}</h1>
    <ul>
      <li>
        <h3>{t("step1.title")}</h3>
        <p>{t("step1.description")}</p>
      </li>
      <li>
        <h3>{t("step2.title")}</h3>
        <p>{t("step2.description")}</p>
      </li>
      <li>
        <h3>{t("step3.title")}</h3>
        <p>{t("step3.description")}</p>
        <Code defaultLang="tsx">
          {
            `export default function Page(){
  return <h1>${ t("step3.h1") }</h1>
}`
          }
        </Code>
      </li>
      <li>
        <h3>{t("step4.title")}</h3>
        <p>{t.rich("step4.description")}</p>
      </li>
    </ul>
    <p>{t("ref.title")}: <a href="https://beta.nextjs.org/docs/routing/fundamentals" rel="noopener noreferrer" target="_blank">{t("ref.next-beta")}</a></p>
  </Article>;
}