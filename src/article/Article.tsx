import React, { useState } from "react";
import styles from "./Article.module.css";
import { nanoid } from 'nanoid';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MyModal from "../modal/Modal";

export default function Article({article}) {
    // const [click, setClick] = useState(false)
    // console.log("article.byline", article.byline)
    const {section, subsection, abstract, title, url, byline, multimedia} = article;
    let id = nanoid();

    // const multimediaDisplay = multimedia.map((media) => {
    //     if(media) {
    //         return (<div className={styles.media}>{media.url}</div>)
    //     }
    // })

    // function handleClick() {
    //     setClick(prevClick => !prevClick);
    //     if(click) {
    //         return (<section className={styles.bigView}>
    //             <h2>{title}</h2>
    //             <p>{byline}</p>
    //             <p>{abstract}</p>
    //             <a href={url}>link</a>
    //             <div>{multimediaDisplay}</div>
    //             </section>);
    //     }
    // }
    return (
        <Link  
            key={id} 
            to={`/${section}/${title}`}
            state={{id: id, article: article}}
        >
            <div className={styles.article}>
                <h2>{title}</h2>
                <p>{byline}</p>
                <p>{abstract}</p>
                {/* <button onClick={handleClick}>More</button> */}
            </div>
            <MyModal />
        </Link>
    );
}