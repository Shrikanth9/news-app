import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/lib/news-list";

export default function NewsPage() {
    return (
        <>
         <h1> This is a news page </h1>
        <NewsList news={DUMMY_NEWS}/>
        </>
    );
}