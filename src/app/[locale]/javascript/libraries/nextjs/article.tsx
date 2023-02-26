import Ar from "@/components/article.jsx";
export default function Article(props: Parameters<typeof Ar>[0]) {
  return <Ar {...props} />;
}