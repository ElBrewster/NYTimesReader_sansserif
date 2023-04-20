import * as React from "react";
import styles from "./Header.module.css";
import { FaRegPaperPlane } from "react-icons/fa"

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>NYTimes Reader <span className={styles.spanny}>&#42;sans-serif</span></h1>
            <FaRegPaperPlane className={styles.airplane2}/>
            <FaRegPaperPlane className={styles.airplane}/>

        </header>
    );
}