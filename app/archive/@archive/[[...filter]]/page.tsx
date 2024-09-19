import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import NewsList from "@/lib/news-list";
import Link from "next/link";

export default function FilteredNewsPage({ params }: any) {
    let links: number[] = getAvailableNewsYears();
    const year: string = params.filter?.[0];
    const month: string = params.filter?.[1];
    

    console.log(params.filter)

    let news;

    if(year && !month) {
        news = getNewsForYear(year);
        links = getAvailableNewsMonths(year);
    }

    if(year && month) {
        news = getNewsForYearAndMonth(year, month);
        links = [];
    }

    let newsContent = <p> No news found for the given period. </p>

    if(news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    if((year && !getAvailableNewsYears().includes(+year as never)) || 
        (month && !getAvailableNewsMonths(year).includes(+month as never))) {
        throw new Error('Invalid filter');
    }

    return (
        <>
            <h1> News Archive </h1>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
                            return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li> 
                            )}
                        )}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    )
}