import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./MagazinePage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';


export default function MagazinePage() {
    const [myMagazine, setMyMagazine] = useState([]);

    useEffect(() => {
        const promise = myFetch("/magazine");
        promise.then((data) => setMyMagazine(data.results));
    }, []);
    
    const topStories = myMagazine.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}