import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./MoviesPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function MoviesPage() {
    const [myMovies, setMyMovies] = useState([]);

    useEffect(() => {
        const promise = myFetch("/movies");
        promise.then((data) => setMyMovies(data.results));
    }, [myMovies]);
    
    const topStories = myMovies.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}