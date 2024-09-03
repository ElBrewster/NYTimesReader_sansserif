import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./SundayReviewPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';


export default function SundayReviewPage() {
    const [mySundayReview, setMySundayReview] = useState([]);

    useEffect(() => {
        const promise = myFetch("/sundayreview");
        promise.then((data) => setMySundayReview(data.results));
    }, []);
    
    const topStories = mySundayReview.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}