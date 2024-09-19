import Link from "next/link";

export default  function NewsList({news}: { news: any}) {
    return (
        <ul className="news-list">
        {news.map((item: any) => (
            <li key={item.id}>
                <Link href={`/news/${item.slug}`}>
                    <img src={`/images/news/${item.image}`} alt={item.title} />
                    <h2>{item.title}</h2>
                </Link>
                <p>{item.content}</p>
            </li>
        ))}
      </ul>
    );
}