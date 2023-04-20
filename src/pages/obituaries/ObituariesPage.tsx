import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./ObituariesPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';

export default function ObituariesPage() {
    const [myObituaries, setMyObituaries] = useState([]);

    useEffect(() => {
        const promise = myFetch("/obituaries");
        promise.then((data) => setMyObituaries(data.results));
    }, [myObituaries]);
    
    const topStories = myObituaries.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}