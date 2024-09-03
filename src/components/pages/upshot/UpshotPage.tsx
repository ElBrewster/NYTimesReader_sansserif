import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./UpshotPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';


export default function UpshotPage() {
    const [myUpshot, setMyUpshot] = useState([]);

    useEffect(() => {
        const promise = myFetch("/upshot");
        promise.then((data) => setMyUpshot(data.results));
    }, []);
    
    const topStories = myUpshot.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}