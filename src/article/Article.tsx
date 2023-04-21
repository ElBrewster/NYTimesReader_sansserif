import React, { useState } from "react";
import styles from "./Article.module.css";
import { nanoid } from 'nanoid';

import { Link, Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';

export default function Article({article}) {
    const [click, setClick] = useState(false)
    const {section, subsection, abstract, title, url, byline, multimedia} = article;
    let id = nanoid();

    const multimediaDisplay = multimedia.map((media) => {
        if(media) {
            return (<div className={styles.media}>{media.url}</div>)
        }
    })
    const toggleButtonText = click? "Hide" : "Show More";
    const toggleDiv = click ? <section className={styles.bigView}>
    <h2>{title}</h2>
    <p>{byline}</p>
    <p>{abstract}</p>
    <a href={url}>link</a>
    <div>{multimediaDisplay}</div>
    </section>
    : "";

    function handleClick() {
        setClick(prevClick => !prevClick);
        if(click) {
            return (<section className={styles.bigView}>
                <h2>{title}</h2>
                <p>{byline}</p>
                <p>{abstract}</p>
                <a href={url}>link</a>
                <div>{multimediaDisplay}</div>
                </section>);
        }
    }
    return (
        <div>

            <div className={styles.article}>
                <Link  
                    key={id} 
                    to={`/${section}/${title}`}
                    state={{id: id, article: article}}
                >
                    <h2>{title}</h2>
                </Link>
                <p>{byline}</p>
                <p>{abstract}</p>
                <button onClick={handleClick}>{toggleButtonText}</button>
                {toggleDiv}
            </div>
        </div>
    );
}