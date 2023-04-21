import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./USPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function USPage() {
    const [myUS, setMyUS] = useState([]);

    useEffect(() => {
        const promise = myFetch("/us");
        promise.then((data) => setMyUS(data.results));
    }, []);
    
    const topStories = myUS.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}