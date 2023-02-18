"use client";
import { Link } from "next-intl";
import { usePathname } from 'next-intl/client';
import ClientLink from "./client-link.jsx";
export default function Lang(props: Partial<Parameters<typeof Link>[0]>) {
  const u = usePathname();
  return <ClientLink {...props} href={u ?? "/"} />;
}