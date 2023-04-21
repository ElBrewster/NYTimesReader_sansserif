import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TravelPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function TravelPage() {
    const [myTravel, setMyTravel] = useState([]);

    useEffect(() => {
        const promise = myFetch("/travel");
        promise.then((data) => setMyTravel(data.results));
    }, []);
    
    const topStories = myTravel.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}