import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TopStoriesPage.module.css";
import Article from "../../article/Article";

export default function TopStoriesPage() {
    // const [myTopStories, setMyTopStories] = useState([]);
   
    // useEffect(() => {
    //   fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
    //   .then(res => res.json())
    //   .then(data=> setMyTopStories(data.results))
    // }, [myTopStories])
    
    // const topStories = myTopStories.map(article => {
    //   let id = nanoid();
    //   return <Article key={id} article={article}/>;
    // })
    return(
        <div className={styles.topStoriesPageContainer}>
            {/* {topStories} */}
        </div>
    );
}

