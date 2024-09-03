import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./PoliticsPage.module.css";
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

export default function PoliticsPage() {
    const [myPolitics, setMyPolitics] = useState([]);

    useEffect(() => {
        const promise = myFetch("/politics");
        promise.then((data) => setMyPolitics(data));
    }, []);
    
    const topStories = myPolitics?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}