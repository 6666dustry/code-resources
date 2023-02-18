"use client";
import { useRef, Dispatch, SetStateAction } from "react";
export default function Item({ index, setResult, value }: { index: number; setResult: Dispatch<SetStateAction<string[]>>; value: string; }) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  return <li ><input ref={inputRef} onInput={
    () => {
      setResult(prev => {
        if (inputRef.current) {
          prev[index] = inputRef.current.value;
        }
        return [...prev];
      });
    }} type="text" value={value} onDoubleClick={() => {
      setResult(prev => {
        prev.splice(index, 1);
        return [...prev];
      });
    }} /></li>;
}