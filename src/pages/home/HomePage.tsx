import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./HomePage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function HomePage() {
    const [myHome, setMyHome] = useState([]);

    useEffect(() => {
        const promise = myFetch("/home");
        promise.then((data) => setMyHome(data.results));
    }, []);
    
    const topStories = myHome.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}