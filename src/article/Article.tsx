import React from "react";
import styles from "./Article.module.css";
import { nanoid } from 'nanoid';

import { Link, useLocation } from 'react-router-dom';
import Modal from "../modal/Modal";


export default function Article({article}) {
    const {published_date, section, subsection, abstract, title, url, byline, multimedia} = article;
    let location = useLocation();
    let state = location.state as { backgroundLocation?: Location };
    let id = nanoid();

    function handleMouseOver() {
      return <Modal article={article}/>
    }
    return (
        <Link  
        key={id} 
        state={{backgroundLocation: location}}
        to={`/${article.section}/${article.subsection}`}>
            <div className={styles.article} onMouseOver={handleMouseOver}>
                <h2>{title}</h2>
                <p>{byline}</p>
                <p>{abstract}</p>
                <p>{published_date}</p>
            </div>
        </Link>

    );
}