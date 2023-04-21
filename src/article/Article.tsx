import React, { useState } from "react";
import styles from "./Article.module.css";
import { nanoid } from 'nanoid';

import { Link, Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';

export default function Article({article}) {
    const [click, setClick] = useState(false)
    const {section, subsection, abstract, title, url, byline, multimedia} = article;
    let id = nanoid();

    const multimediaDisplay = multimedia[1] ? <img className={styles.media} src={multimedia[1].url} /> : "";
    const toggleButtonText = click? "Hide" : "Show More";
    const toggleDiv = click ? <section className={styles.bigView}>
                                <div>{multimediaDisplay}</div>
                                <a href={url} className={styles.hrefLink}>Go to NYT Article Page</a>
                            </section>
                            : "";

    function handleClick() {
        setClick(prevClick => !prevClick);
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
                <p className={styles.byline}>{byline}</p>
                <p>{abstract}</p>
                <button onClick={handleClick} className={styles.hideShowButton}>{toggleButtonText}</button>
                {toggleDiv}
            </div>
        </div>
    );
}