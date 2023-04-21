import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from  "./HealthPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function HealthPage() {
    const [myHealth, setMyHealth] = useState([]);

    useEffect(() => {
        const promise = myFetch("/health");
        promise.then((data) => setMyHealth(data.results));
    }, []);
    
    const topStories = myHealth.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}