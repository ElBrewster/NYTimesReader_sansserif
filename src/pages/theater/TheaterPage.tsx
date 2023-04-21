import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TheaterPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function TheaterPage() {
    const [myTheater, setMyTheater] = useState([]);

    useEffect(() => {
        const promise = myFetch("/theater");
        promise.then((data) => setMyTheater(data.results));
    }, []);
    
    const topStories = myTheater.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}