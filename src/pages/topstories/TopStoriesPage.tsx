import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./TopStoriesPage.module.css";
import Article from "../../article/Article";
import { Link, useLocation } from 'react-router-dom';

export default function TopStoriesPage() {
    const [myTopStories, setMyTopStories] = useState([]);
    let location = useLocation();
    let state = location.state as { backgroundLocation?: Location };
   
    useEffect(() => {
      fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
      .then(res => res.json())
      .then(data=> setMyTopStories(data.results))
    }, [myTopStories])
    
    const topStories = myTopStories.map((article) => (<Article article={article}/>));
    // {
    //     // console.log("article", article)
    //     // let section = "topstories";
    //     // let section = article.section;
    //     // let id = nanoid();
    //     return (
    //         // <Link  
    //         //     key={id} 
    //         //     state={{backgroundLocation: location}}
    //         //     to={`/${article.section}/${article.subsection}`}>
    //             <Article article={article}/>
    //         {/* </Link> */}
    //         );
    // })
    return(
        <div className={styles.topStoriesPageContainer}>
            {topStories}
        </div>
    );
}

