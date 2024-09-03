import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./Automobiles.module.css";
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

export default function AutomobilesPage() {
    const [myAutomobiles, setMyAutomobiles] = useState([]);

    useEffect(() => {
        const promise = myFetch("/automobiles");
        promise.then((data) => setMyAutomobiles(data));
    }, []);
    
    const topStories = myAutomobiles?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}