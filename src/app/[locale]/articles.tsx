import { Link, useLocale } from "next-intl";
import { useTranslations } from "next-intl";
const articles = [
  {
    url: "/javascript/libraries/threejs/stamp/",
    title: {
      ja: "スタンプ",
      en: "Stamp"
    }
  }, {
    url: "css/theme",
    title: {
      ja: "CSSのテーマ",
      en: "CSS theme"
    }
  }, {
    url: "/javascript/libraries/nextjs/making-website/",
    title: {
      ja: "Next.jsのベータに触れよう",
      en: "Try Next.js beta"
    }
  }, {
    url: "/javascript/libraries/react/comment-out/",
    title: {
      ja: "タグのコメントアウト",
      en: "comment-out tags"
    }
  }, {
    url: "/other/pair-challenge-maker/",
    title: {
      ja: "ペアお題メーカー",
      en: "pair-challenge-maker"
    }
  }
];
export default function Articles() {
  const t = useTranslations("Index");
  const show = articles.slice(0, 5);
  const locale = useLocale() as "en" | "ja";
  return <div>
    <h2>{t("recently")}</h2>
    <ul>{
      show.map(v => {
        const title = v.title[locale] ?? v.title.en;
        return <li key={title}><p><Link href={v.url}>{title}</Link></p></li>;
      })}</ul>
  </div>;
}