import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TMagazinePage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function TMagazinePage() {
    const [myTMagazine, setMyTMagazine] = useState([]);

    useEffect(() => {
        const promise = myFetch("/t-magazine");
        promise.then((data) => setMyTMagazine(data.results));
    }, []);
    
    const topStories = myTMagazine.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}