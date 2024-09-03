import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./RealEstatePage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../../api/apiCalls';


export default function RealEstatePage() {
    const [myRealEstate, setMyRealEstate] = useState([]);

    useEffect(() => {
        const promise = myFetch("/realestate");
        promise.then((data) => setMyRealEstate(data.results));
    }, []);
    
    const topStories = myRealEstate.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}