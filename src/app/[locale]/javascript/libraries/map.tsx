import MapTemplate from "@/components/links/map-template.jsx";
import { lazy } from "react";
const Three = lazy(() => import("./threejs/map.jsx"));
const React = lazy(() => import("./react/map.jsx"));
const Next = lazy(() => import("./nextjs/map.jsx"));
export default function Map({ deep }: { deep?: boolean; }) {
  return <MapTemplate deep={deep} links={[{
    href: "/javascript/libraries/nextjs",
    text: "Next.js"
  }, {
    href: "/javascript/libraries/react",
    text: "React"
  }, {
    href: "/javascript/libraries/threejs",
    text: "Three.js"
  }]} deepChildren={[
    <React key="react" deep />,
    <Next key="next" deep />,
    <Three key="three" deep />]} />;
}