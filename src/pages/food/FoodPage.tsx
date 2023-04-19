import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import styles from './FoodPage.module.css';
import Article from "../../article/Article";

export default function FoodPage() {
    // const [myFood, setMyFood] = useState([]);

    // useEffect(() => {
    //   fetch("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
    //   .then(res => res.json())
    //   .then(data=> setMyFood(data.results))
    // }, [myFood])
    
    // const food = myFood.map(article => {
    //   let id = nanoid();
    //   return <Article key={id} article={article}/>;
    // })
    return (
        <div className={styles.foodPageContainer}>
            {/* {food} */}
        </div>
    );
}