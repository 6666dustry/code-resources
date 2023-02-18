"use client";
const KEY = "pair-challenge-maker-ver2";
type values = [string[], string[], string[], string[]];
function get(): values {
  return JSON.parse(localStorage.get(KEY)) ?? [[], [], [], []];
}
function set(value: values) {
  localStorage.setItem(KEY, JSON.stringify(value));
}
export default function Maker() {
  return <div />;
}