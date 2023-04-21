import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TopStoriesPage.module.css";
import Article from "../../article/Article";
import { Link, useLocation } from 'react-router-dom';
import myFetch from '../../../api/apiCalls';


export default function TopStoriesPage() {
    const [myTopStories, setMyTopStories] = useState([]);

    useEffect(() => {
        const promise = myFetch("/topstories");
        promise.then((data) => setMyTopStories(data.results));
    }, []);
    
    const topStories = myTopStories.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}

