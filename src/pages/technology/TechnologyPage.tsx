import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TechnologyPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function TechnologyPage() {
    const [myTechnology, setMyTechnology] = useState([]);

    useEffect(() => {
        const promise = myFetch("/technology");
        promise.then((data) => setMyTechnology(data.results));
    }, [myTechnology]);
    
    const topStories = myTechnology.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}