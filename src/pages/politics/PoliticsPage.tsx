import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./PoliticsPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function PoliticsPage() {
    const [myPolitics, setMyPolitics] = useState([]);

    useEffect(() => {
        const promise = myFetch("/politics");
        promise.then((data) => setMyPolitics(data.results));
    }, [myPolitics]);
    
    const topStories = myPolitics.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}