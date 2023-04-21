import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./FashionPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function FashionPage() {
    const [myFasion, setMyFashion] = useState([]);

    useEffect(() => {
        const promise = myFetch("/fashion");
        promise.then((data) => setMyFashion(data.results));
    }, []);
    
    const topStories = myFasion.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}