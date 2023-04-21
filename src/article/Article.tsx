import React, { useState } from "react";
import styles from "./Article.module.css";
import { nanoid } from 'nanoid';

import { Link, Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';

export default function Article({article}) {
    const [click, setClick] = useState(false)
    const {section, subsection, abstract, title, url, byline, multimedia} = article;
    let id = nanoid();
    const multimediaDisplay = multimedia[1] ? <div className={styles.imageContainer}>
                                                <img className={styles.media} src={multimedia[1].url} alt={multimedia[1].caption} /> 
                                                <p className={styles.abstract}>{multimedia[1].caption}</p>
                                             </div>
                                            : "";
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
                    <h2 className={styles.title}>{title}</h2>
                </Link>
                <p className={styles.byline}>{byline}</p>
                <p className={styles.abstract}>{abstract}</p>
                <button onClick={handleClick} className={styles.hideShowButton}>{toggleButtonText}</button>
                {toggleDiv}
            </div>
        </div>
    );
}