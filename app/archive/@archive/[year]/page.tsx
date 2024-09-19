import { getNewsForYear } from "@/lib/news";
import NewsList from "@/lib/news-list";

export default function FilteredNewsPage({ params }: any) {

    const year = params.year
    const news = getNewsForYear(year);
    console.log(year);
    
    
    return (
        <>
           <h1> News Archive </h1>
           <NewsList news={news}/>
        
        </>
    )
}