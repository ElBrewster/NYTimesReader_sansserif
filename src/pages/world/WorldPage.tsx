import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./WorldPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function WorldPage() {
    const [myWorld, setMyWorld] = useState([]);

    useEffect(() => {
        const promise = myFetch("/world");
        promise.then((data) => setMyWorld(data.results));
    }, [myWorld]);
    
    const topStories = myWorld.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}