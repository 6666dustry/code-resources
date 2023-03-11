const util = (n: string, u: string) => ({ name: n, url: u });
export let category = {
  HTML: util(
    "HTML",
    "/html"
  ),
  CSS: util(
    "CSS",
    "/css"
  ),
  JavaScript: util(
    "JavaScript",
    "/javascript"
  ),
  ThreeJS: util(
    "Three.js",
    "/javascript/libraries/threejs"
  ),
  NextJS: util(
    "Next.js",
    "/javascript/libraries/nextjs"
  ),
  React: util(
    "React",
    "/javascript/libraries/react"
  ),
  Blender: util(
    "Blender",
    "/other/Blender"
  )
} satisfies {
    [p in string]: {
      name: string;
      url: string;
    };
  };
