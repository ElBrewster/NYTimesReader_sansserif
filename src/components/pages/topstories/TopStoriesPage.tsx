import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TopStoriesPage.module.css";
import Article from "../../article/Article";
import { Link, useLocation } from 'react-router-dom';
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

export default function TopStoriesPage() {
    const [myTopStories, setMyTopStories] = useState([]);

    useEffect(() => {
        const promise = myFetch("/topstories");
        promise.then((data) => setMyTopStories(data));
    }, []);
    
    const topStories = myTopStories?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}

