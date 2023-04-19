import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import styles from "./OpinionsPage.module.css";
import Article from "../../article/Article";
export default function OpinionsPage() {
    // const [myOpinions, setMyOpinions] = useState([]);

    // useEffect(() => {
    //   fetch("https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
    //   .then(res => res.json())
    //   .then(data=> setMyOpinions(data.results))
    // }, [myOpinions])
    
    // const opinions = myOpinions.map(article => {
    //   let id = nanoid();
    //   return <Article key={id} article={article}/>;
    // })
    return(
        <div className={styles.opinionsPageContainer}>
            {/* {opinions} */}
        </div>
    );
}