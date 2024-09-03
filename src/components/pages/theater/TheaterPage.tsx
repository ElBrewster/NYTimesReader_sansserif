import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TheaterPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';

interface ArticleProps {
    article: {
        section: string;
        title: string;
        abstract: string;
        published_date: string;
        url: string;
        byline: string;
        multimedia: MultiMedia[];
    }
}

interface MultiMedia {
    url: string;
    caption: string;
}

export default function TheaterPage() {
    const [myTheater, setMyTheater] = useState<any>([]);

    useEffect(() => {
        const promise = myFetch("/theater");
        promise.then((data) => setMyTheater(data));
    }, []);
    
    const topStories = myTheater?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}