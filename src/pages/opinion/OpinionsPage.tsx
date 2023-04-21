import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import styles from "./OpinionsPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function OpinionsPage() {
    const [myOpinion, setMyOpinion] = useState([]);

    useEffect(() => {
        const promise = myFetch("/opinion");
        promise.then((data) => setMyOpinion(data.results));
    }, []);
    
    const topStories = myOpinion.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}