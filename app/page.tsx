import type { Article } from "./lib";
import ArticleList from "./component/ArticleList";
import { Heading } from "./common/components/index";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles");

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>新着記事</Heading>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}