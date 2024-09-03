import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./InsiderPage.module.css";
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

export default function InsiderPage() {
    const [myInsider, setMyInsider] = useState([]);

    useEffect(() => {
        const promise = myFetch("/insider");
        promise.then((data) => setMyInsider(data));
    }, []);
    
    const topStories = myInsider?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}