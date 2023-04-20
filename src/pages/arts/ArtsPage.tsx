import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from  "./ArtsPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';

export default function ArtsPage() {
    const [myArts, setMyArts] = useState([]);

    useEffect(() => {
        const promise = myFetch("/arts");
        promise.then((data) => setMyArts(data.results));
    }, [myArts]);
    
    const topStories = myArts.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}