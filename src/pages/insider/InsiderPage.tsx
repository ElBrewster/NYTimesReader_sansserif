import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./InsiderPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function InsiderPage() {
    const [myInsider, setMyInsider] = useState([]);

    useEffect(() => {
        const promise = myFetch("/insider");
        promise.then((data) => setMyInsider(data.results));
    }, [myInsider]);
    
    const topStories = myInsider.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}