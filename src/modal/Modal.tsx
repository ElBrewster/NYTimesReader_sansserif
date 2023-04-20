import * as React from "react";
import styles from "./Modal.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Modal({article}) {
    let navigate = useNavigate();
    let { section } = useParams();
    

    function onDismiss() {
        navigate(-1);
    }

    return (
            <dialog className={styles.dialog}>
                <div className={styles.modalContainer}>
                    <p>{article.title}</p>
                    <p>yo</p>
                    //add the multimedia content
                </div>
                <button onClick={onDismiss}>GO BACK</button>
            </dialog>
    );
}