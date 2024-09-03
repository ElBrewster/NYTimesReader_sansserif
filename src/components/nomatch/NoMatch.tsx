import * as React from "react";
import styles from "./NoMatch.module.css"
import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div className={styles.noMatchContainer}>
            <p>There's nothing here!</p>
            <Link to="/" className={styles.linkHome}>Go Home</Link>
        </div>
    );
}