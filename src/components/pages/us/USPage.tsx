import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./USPage.module.css";
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

export default function USPage() {
    const [myUS, setMyUS] = useState([]);

    useEffect(() => {
        const promise = myFetch("/us");
        promise.then((data) => setMyUS(data));
    }, []);
    
    const topStories = myUS?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}