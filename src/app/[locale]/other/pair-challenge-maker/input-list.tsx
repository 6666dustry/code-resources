"use client";
import styles from "./style.module.scss";
import Item from "./item.jsx";
import { useEffect, useRef, useState, } from "react";
/**localStorage setup */
const KEY = "pair-InputList";
let data: {
  [k: string]: string[];
} = {};
let list: string | null = "";

function setup() {
  list = localStorage?.getItem(KEY);
  if (!list) {
    localStorage?.setItem(KEY, "");
  } else {
    data = JSON.parse(list);
  }
};

function get(key: string): undefined | string[] {
  return data[key];
}
function set(key: string, value: string[]) {
  if (localStorage != undefined) {
    data[key] = value;
    localStorage.setItem(KEY, JSON.stringify(data));
  }

}
export default function InputList({ children, delay = 0, enter, name, not = [], placeholder = "enter a item", sendResult, suffix = "" }: {
  children: string;
  enter: boolean;
  name: string;
  sendResult: (v: string) => void;
  suffix?: string;
  not?: string[];
  delay?: number;
  placeholder?: string;
}) {

  const [choices, setChoices] = useState<string[]>(get(name) ?? []);
  const headingRef = useRef<null | HTMLHeadingElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [id, setId] = useState(0);
  const [value, setValue] = useState("");
  useEffect(() => {
    set(name, choices);
  });
  useEffect(() => {
    if (enter && headingRef.current) {
      if (choices.length < 1) {
      } else {
        clearInterval(id);
        setId(window.setInterval(() => {
          let realChoices = choices.filter((v) => {

            for (const iterator of not) {
              if (v === iterator)
                return false;
            }
            return true;

          });

          const result = realChoices[Math.floor(Math.random() * realChoices.length)];;
          setValue(result);
          if (headingRef.current && result) {
            headingRef.current.textContent = result + suffix;
          }
        }, 25));
      }
    } else {
      window.setTimeout(() => {
        clearInterval(id);
        if (value) {
          sendResult(value);
        }
      }, delay);
    }
  }, [enter, delay, id, not, suffix, value, choices, sendResult]);
  const items = choices.map((v, i) => {
    if (!v) {
      return;
    }
    return <Item key={i} index={i} setResult={setChoices} value={choices[i]} />;
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change",
        (e: any/*Event*/) => {
          if (!e.currentTarget) {
            return;
          }

          const value = e.currentTarget.value;
          setChoices(prev => [...prev, value]);

          e.currentTarget.value = "";
        });
    }
  }, []);
  useEffect(() => {
    setChoices(c => c.filter((v) => {
      return !!v;
    }));
  }, []);

  return <section className={styles.inputSection} >
    <h2 ref={headingRef}>{children}</h2>
    <input ref={inputRef} className={styles.inputChoice} minLength={1} name="text" placeholder={placeholder} type="text" />
    <ul className={styles.inputList}>{...items}</ul>
  </section>;
}