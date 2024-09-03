import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import styles from  "./ArtsPage.module.css";
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

export default function ArtsPage() {
    const [myArts, setMyArts] = useState<any>([]);

    useEffect(() => {
        const promise = myFetch("/arts");
        promise.then((data) => setMyArts(data));
    }, []);
    
    const topStories = myArts?.map((article: ArticleProps) => {
        let id = nanoid();
        return <Article key={id} article={article.article}/>;
    });

    return(
        <div className={styles.artsPageContainer}>
            <>
                {topStories}
            </>
        </div>
    );
}