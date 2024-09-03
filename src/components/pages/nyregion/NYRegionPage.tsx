import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./NYRegionPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';


export default function NYRegionPage() {
    const [myNYRegion, setmyNYRegion] = useState([]);

    useEffect(() => {
        const promise = myFetch("/nyregion");
        promise.then((data) => setmyNYRegion(data.results));
    }, []);
    
    const topStories = myNYRegion.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}