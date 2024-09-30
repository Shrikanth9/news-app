import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return DUMMY_NEWS.map((news: any) => ({
        slug: news.slug
    }));
}

export default function NewsDetailPage( { params }: any) {
    const paramSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((news: any) => news.slug === paramSlug);

    if (!newsItem) {
        notFound();
    }
    return (
        <article className="news-article">
            <header>
                 <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                 <h1>{newsItem.title}</h1>
                 <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
                 <p>{newsItem.content}</p>
        </article>
    );
}