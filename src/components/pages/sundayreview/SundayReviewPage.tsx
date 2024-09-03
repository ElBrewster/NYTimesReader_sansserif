import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./SundayReviewPage.module.css";
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

export default function SundayReviewPage() {
    const [mySundayReview, setMySundayReview] = useState([]);

    useEffect(() => {
        const promise = myFetch("/sundayreview");
        promise.then((data) => setMySundayReview(data));
    }, []);
    
    const topStories = mySundayReview?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}