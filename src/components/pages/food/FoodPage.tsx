import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import styles from './FoodPage.module.css';
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';


export default function FoodPage() {
    const [myFood, setMyFood] = useState([]);

    useEffect(() => {
        const promise = myFetch("/food");
        promise.then((data) => setMyFood(data.results));
    }, []);
    
    const topStories = myFood.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}