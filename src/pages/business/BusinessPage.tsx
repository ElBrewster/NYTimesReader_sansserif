import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import styles from "./BusinessPage.module.css";
import Article from "../../article/Article";

export default function BusinessPage() {
    // const [myBusiness, setMyBusiness] = useState([]);

    // useEffect(() => {
    //   fetch("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
    //   .then(res => res.json())
    //   .then(data=> setMyBusiness(data.results))
    // }, [myBusiness])
    
    // const business = myBusiness.map(article => {
    //   let id = nanoid();
    //   return <Article key={id} article={article}/>;
    // })
    return (
        <div className={styles.businessPageContainer}>
            {/* {business} */}
        </div>
    );
}