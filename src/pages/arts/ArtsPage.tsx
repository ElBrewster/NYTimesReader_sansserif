import { useEffect, useState } from 'react'
import styles from  "./ArtsPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';

interface ArticleProps {
    section: string;
    abstract: string;
    title: string;
    url: string;
    byline: string;
    multimedia: MultiMedia[];
}

interface MultiMedia {
    url: string;
    caption: string;
}

export default function ArtsPage() {
    const [myArts, setMyArts] = useState([]);

    useEffect(() => {
        const promise = myFetch("/arts");
        promise.then((data) => setMyArts(data.results));
    }, []);
    
    const topStories = myArts.map((article: ArticleProps, index) => {
        console.log("arts article: ", article);
        return <Article key={index} article={article}/>;
    });

    return(
        <div className={styles.artsPageContainer}>
            <>
                {topStories}
            </>
        </div>
    );
}