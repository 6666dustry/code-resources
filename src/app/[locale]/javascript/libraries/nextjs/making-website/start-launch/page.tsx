import styles from "./page.module.css";
import Article from "@/components/article/article.jsx";
import Ruby from "@/components/ruby.jsx";
import Code from "@/components/code.jsx";
import { useLocale, useTranslations } from "next-intl";
export default function Articles() {
  const t = useTranslations("JavaScript.library.nextjs.making-website.start-launch");
  const disableRuby = !(useLocale() === "jp");
  return <Article upload={new Date(2023, 1, 11)} next="/javascript/libraries/nextjs/making-website/make-sub-page" prev="/javascript/libraries/nextjs/making-website/">
    <br />
    <h1>{t("title")}</h1>
    <h2>{t("step1.title")}</h2>
    <p dangerouslySetInnerHTML={{ __html: t.raw("step1.description") }} />

    <h3 className={styles.smile}>{t("step1.command")}</h3>
    <Code>{`# ${ t("step1.case", { manager: "npm" }) }
npx create-next-app@latest

# ${ t("step1.case", { manager: "yarn" }) }
yarn create next-app

# ${ t("step1.case", { manager: "pnpm" }) }
pnpm create next-app`}
    </Code>
    <h3>{t("step1.config.title")}</h3>
    <p>{t.rich("step1.config.description", {
      green: (c) => <span className={styles.default}>{c}</span>,
      red: (c) => <span className={styles.choice}>{c}</span>
    })}</p>
    <dl className={styles.configuration}>
      <dt>
        <p> <Ruby disabled={disableRuby} ruby="このプロジェクトの名前は？">What is your project named? </Ruby> :{t("step1.config.naming.choose")}</p>
      </dt>
      <dd>
        <p>{t("step1.config.naming.description")}</p>
      </dd>
      <dt>
        <p><Ruby disabled={disableRuby} ruby={<><a href="https://www.typescriptlang.org
"rel="noopener noreferrer" target="_blank" title={t("step1.config.TypeScript.description")} >TypeScript</a>を使いたいですか？</>}> Would you like to use TypeScript with this project? </Ruby> » No / <span className={styles.default}>Yes</span> : <span className={styles.choice}>Yes</span></p></dt>
      <dd>
        <p><a href="https://www.typescriptlang.org
" rel="noopener noreferrer" target="_blank" title={t("step1.config.TypeScript.description")} >TypeScript</a></p>
      </dd>
      <dt>
        <p><Ruby disabled={disableRuby} ruby={<><a href="https://eslint.org/" rel="noopener noreferrer" target="_blank" title={t("step1.config.ESLint.description")} >ESLint</a>を使いたいですか？</>}> Would you like to use ESLint with this project?</Ruby> » No / <span className={styles.default}>Yes</span> : <span className={styles.choice}>Yes</span></p></dt>
      <dd>
        <p><a href="https://eslint.org/" rel="noopener noreferrer" target="_blank" title={t("step1.config.ESLint.description")} >ESLint</a></p>
      </dd>
      <dt>
        <p><Ruby disabled={disableRuby} ruby="`src/`ディレクトリを使いたいですか？">Would you like to use `src/` directory with this project?</Ruby> » No / <span className={styles.default}>Yes</span> : <span className={styles.choice}>Yes</span></p></dt>
      <dd />
      <dt>
        <p><Ruby disabled={disableRuby} ruby="実験的な機能の`app/`ディレクトリを使いたいですか？"> Would you like to use experimental `app/` directory with this project?</Ruby> » <span className={styles.default}>No</span> / Yes : <span className={styles.choice}>Yes</span></p>
      </dt>
      <dd>
        <p>{t.rich("step1.config.app.description")}</p>
      </dd>
      <dt>
        <p><Ruby disabled={disableRuby} ruby="import aliasの設定は何にしますか？"> What import alias would you like configured? </Ruby> :{t("step1.config.alias.choose")}</p>
      </dt>
      <dd>
        {t.rich("step1.config.alias.description")}
      </dd>
    </dl>
    <h2>{t("step2.title")}</h2>
    <p>{t.rich("step2.description")}</p>
    <p>{t("step2.command")}</p>
    <Code >{
      `# ${ t("step1.case", { manager: "npm" }) }
npm run dev

# ${ t("step1.case", { manager: "yarn" }) }
yarn dev

# ${ t("step1.case", { manager: "pnpm" }) }
pnpm dev`
    }
    </Code>
    <p>
      {t.rich("step2.booted", {
        server: c => <a href="http://localhost:3000">{c}</a>
      })}
    </p>
    <p>
      {t.rich("step2.open", {
        server: c => <a href="http://localhost:3000">{c}</a>
      })}</p>
    <p>{t("step2.finally")}</p>
    <p>{t("ref.title")}:</p>
    <ul>
      <li> <p>
        <a href="https://nextjs.org/docs/getting-started" rel="noopener noreferrer" target="_blank" >
          {t("ref.next")}</a>
      </p></li>
      <li><p>
        <a href="https://beta.nextjs.org/docs/installation" rel="noopener noreferrer" target="_blank" >
          {t("ref.next-beta")}</a>
      </p></li></ul>

  </Article>;
}