import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./SciencePage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function SciencePage() {
    const [myScience, setMyScience] = useState([]);

    useEffect(() => {
        const promise = myFetch("/science");
        promise.then((data) => setMyScience(data.results));
    }, []);
    
    const topStories = myScience.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}