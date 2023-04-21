import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./SportsPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';

export default function SportsPage() {
    const [mySports, setMySports] = useState([]);

    useEffect(() => {
        const promise = myFetch("/sports");
        promise.then((data) => setMySports(data.results));
    }, []);
    
    const topStories = mySports.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}