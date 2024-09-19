import { getLatestNews } from "@/lib/news";
import NewsList from "@/lib/news-list";

export default function LatestNewsPage() {
    const news = getLatestNews();
    return (
        <>
          <h1> Latest news </h1>
          <NewsList news={news}/>
        </>
    )
}