"use client";
import { useCallback, useState } from "react";
import InputList from "./input-list.jsx";
import styles from "./style.module.scss";
export default function Select({ placeholder, start, suffix, texts: {
  what, where, who1, who2,
}, }: {
  texts: {
    who1: string;
    who2: string;
    where: string;
    what: string;
  };
  suffix: {
    who1: string;
    who2: string;
    where: string;
    what: string;
  };
  placeholder: string;
  start: string;
}) {
  const [enter, setEnter] = useState(false);
  const [results, setResults] = useState<[string, string, string, string, ...string[]]>(["", "", "", ""]);
  const set = results.map((value, i) => {
    return (v: string) => {
      results[i] = v;
      setResults(results);
    };
  });
  return <><button className={styles.start} onMouseDown={() => {
    setResults(["", "", "", ""]);
    setEnter(true);
  }} onMouseUp={() => {
    setEnter(false);
  }} type="button">{start}</button> <div className={styles.select} >
      <InputList placeholder={placeholder} sendResult={set[0]} name="who1" enter={enter} suffix={suffix.who1} not={results}>{who1}</InputList>
      <InputList placeholder={placeholder} sendResult={set[1]} name="who2" enter={enter} delay={600} suffix={suffix.who2} not={results}>{who2}</InputList>
      <InputList placeholder={placeholder} sendResult={set[2]} name="where" enter={enter} delay={1200} suffix={suffix.where} not={results}>{where}</InputList>
      <InputList placeholder={placeholder} sendResult={set[3]} name="what" enter={enter} delay={1800} not={results} suffix={suffix.what}>{what}</InputList>
    </div></>;
}