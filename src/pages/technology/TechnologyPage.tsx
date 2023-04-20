import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TechnologyPage.module.css";
import Article from "../../article/Article";

export default function TechnologyPage() {
    const [myTravel, setMyTravel] = useState([]);
    let id = nanoid();

    useEffect(() => {
      fetch("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
      .then(res => res.json())
      .then(data=> setMyTravel(data.results))
    }, [myTravel])
    
    const topStories = myTravel.map((article) => (<Article key={id} article={article}/>));
    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}