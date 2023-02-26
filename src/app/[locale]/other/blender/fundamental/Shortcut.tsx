import Key from "@/components/key.jsx";
import React from "react";
export default function Shortcut({ children, keys }: { keys: string | string[], children: React.ReactNode; }) {
  return <li>
    <section>
      <h3><Key>{keys}</Key></h3>
      <p> {children}</p>
    </section>
  </li>;
}