import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from  "./HealthPage.module.css";
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

export default function HealthPage() {
    const [myHealth, setMyHealth] = useState<any>([]);

    useEffect(() => {
        const promise = myFetch("/health");
        promise.then((data) => setMyHealth(data));
    }, []);
    
    const topStories = myHealth?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}