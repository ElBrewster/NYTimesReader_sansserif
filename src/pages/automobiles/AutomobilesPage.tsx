import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./Automobiles.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';

export default function AutomobilesPage() {
    const [myAutomobiles, setMyAutomobiles] = useState([]);

    useEffect(() => {
        const promise = myFetch("/automobiles");
        promise.then((data) => setMyAutomobiles(data.results));
    }, [myAutomobiles]);
    
    const topStories = myAutomobiles.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}