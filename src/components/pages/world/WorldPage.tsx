import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./WorldPage.module.css";
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

export default function WorldPage() {
    const [myWorld, setMyWorld] = useState([]);

    useEffect(() => {
        const promise = myFetch("/world");
        promise.then((data) => setMyWorld(data));
    }, []);
    
    const topStories = myWorld?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.worldPageContainer}>
            {topStories}
        </div>
    );
}