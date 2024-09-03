import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import styles from "./BusinessPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';


export default function BusinessPage() {
    const [myBusiness, setMyBusiness] = useState([]);

    useEffect(() => {
        const promise = myFetch("/business");
        promise.then((data) => setMyBusiness(data.results));
    }, []);
    
    const topStories = myBusiness.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}