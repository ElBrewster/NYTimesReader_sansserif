import React from "react";
import styles from "./Article.module.css";

export default function Article({article}) {
    const {section, subsection, abstract, title, url, byline, multimedia} = article;

    return (
        <div className={styles.article}>
            <h2>{title}</h2>
            <p>{byline}</p>
            <p>{abstract}</p>
        </div>
    );
}