const util = (n: string, u: string) => ({ name: n, url: u });
export let category = {
  html: util(
    "HTML",
    "/html"
  ),
  css: util(
    "CSS",
    "/css"
  ),
  javascript: util(
    "JavaScript",
    "/javascript"
  ),
  blender: util(
    "Blender",
    "/other/Blender"
  )
} satisfies {
    [p in string]: {
      name: string;
      url: string;
    };
  };
