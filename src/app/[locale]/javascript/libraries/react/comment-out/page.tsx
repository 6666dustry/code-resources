import Code from "@/components/code.jsx";
import InlineCode from "@/components/inline-code.jsx";
import Key from "@/components/key.jsx";
import { useTranslations } from "next-intl";
import BackForward from "@/components/links/back-forward.jsx";
export default function Page() {
  const t = useTranslations("JavaScript.library.react.comment-out");
  return <BackForward prev="/javascript/libraries/react">
    <h1>{t("title")}</h1>
    <Code defaultLang="jsx">
      {`<div>
  <p>${ t("display") }</p>
  {/*<p>${ t("notDisplay") }</p>*/}
<div>`}
    </Code>
    <h2>{t("result")}</h2>
    <div>
      <p>{t("display")}</p>
      {/*<p>{t("notDisplay")}</p>*/}
    </div>
    <h2>{t("howTo.title")}</h2>
    <p>{t.rich("howTo.description", {
      code: c => {
        return <InlineCode>{c as string}</InlineCode>;
      },
      //escape characters.
      leftBracket: "{",
      rightBracket: "}"
    })}</p>
    <h3>{t("supplement.title")}</h3>
    <p>{t.rich("supplement.description", {
      //@ts-ignore
      key: <Key>{["ctrl", "/"]}</Key>
    })}</p>
  </BackForward>;
}
