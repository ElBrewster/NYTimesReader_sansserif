import styles from "./Header.module.css";
import { FaRegPaperPlane } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="./home">
                <h1 className={styles.title}>NYTimes Reader <span className={styles.spanny}>&#42;sans-serif</span></h1> 
            </Link>
            <FaRegPaperPlane className={styles.airplane}/>

        </header>
    );
}