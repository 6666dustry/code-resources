import Theme from "../../theme-wrapper.jsx";
import styles from "./rainbow.module.scss";
import Code from "@/components/code.jsx";
import { useTranslations } from "next-intl";
export default function Rainbow() {
  const t = useTranslations("CSS.theme.rainbow");
  return <Theme className={styles.rainbow} description={<p>{t("description")}</p>} name={t("name")} ><Code defaultLang="scss" languages={
    [{
      language: "css", children: `@keyframes rainbow-scroll {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 100% 100%;
  }
}


.rainbow {
  display: block;
  background-size: 300% 300%;
  background-image: linear-gradient(-45deg,
      hsl(0deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%));
  animation: rainbow-scroll 5s linear infinite;
  animation-fill-mode: both;
  animation-direction: reverse;
}
.rainbow  * {
  background: none;
}

.rainbow  >* {
  background-image: linear-gradient(-45deg,
      hsl(0deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%));
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-scroll 5s linear infinite;
  animation-fill-mode: both;
}`}]
  } >{`@keyframes rainbow-scroll {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 100% 100%;
  }
}


.rainbow {
  display: block;
  background-size: 300% 300%;
  background-image: linear-gradient(-45deg,
      hsl(0deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%),
      hsl(60deg, 100%, 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(360deg 100% 50%));
  animation: rainbow-scroll 5s linear infinite;
  animation-fill-mode: both;
  animation-direction: reverse;

  * {
    background:none;
    color: transparent;
  }

  >* {
    background-image: linear-gradient(-45deg,
        hsl(0deg 100% 50%),
        hsl(60deg, 100%, 50%),
        hsl(120deg 100% 50%),
        hsl(180deg 100% 50%),
        hsl(240deg 100% 50%),
        hsl(300deg 100% 50%),
        hsl(360deg 100% 50%),
        hsl(60deg, 100%, 50%),
        hsl(120deg 100% 50%),
        hsl(180deg 100% 50%),
        hsl(240deg 100% 50%),
        hsl(300deg 100% 50%),
        hsl(360deg 100% 50%),
        hsl(60deg, 100%, 50%),
        hsl(120deg 100% 50%),
        hsl(180deg 100% 50%),
        hsl(240deg 100% 50%),
        hsl(300deg 100% 50%),
        hsl(360deg 100% 50%));
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: rainbow-scroll 5s linear infinite;
    animation-fill-mode: both;
  }
}`}</Code></Theme>;
}