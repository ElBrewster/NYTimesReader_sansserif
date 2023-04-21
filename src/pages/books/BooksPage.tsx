import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import styles from "./BooksPage.module.css";
import Article from "../../article/Article";
import myFetch from '../../../api/apiCalls';


export default function BooksPage() {
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        const promise = myFetch("/books");
        promise.then((data) => setMyBooks(data.results));
    }, []);
    
    const topStories = myBooks.map((article) => {
        let id = nanoid();
        return <Article key={id} article={article}/>
        });

    return(
        <div className={styles.travelPageContainer}>
            {topStories}
        </div>
    );
}