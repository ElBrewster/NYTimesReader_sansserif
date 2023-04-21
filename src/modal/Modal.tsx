import { useState } from "react";
import styles from "./Modal.module.css";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";

export default function MyModal() {
    // const {id, article} = backgroundLocation;
    
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    let article = location.state.article;
    const {section, subsection, abstract, title, url, byline, multimedia} = article;

    const multimediaDisplay = multimedia.map((media) => {
        if(media) {
            return (<div className={styles.media}>{media.url}</div>)
        }
    })
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const onDismiss = () => navigate(-1);

    return (
        <div>
            <button onClick={onOpenModal}>See More</button>
            <dialog open={open} onClose={onCloseModal} className={styles.dialog}>
                <h2>hihi</h2>
                <p>anybody home?</p>
                <div className={styles.modalContainer}>
                    <h2>{title}</h2>
                    <p>{byline}</p>
                    <p>{abstract}</p>
                    <a href={url}>Visit</a>
                    <div>{multimediaDisplay}</div>
                 </div>
                <button onClick={onDismiss}>GO BACK</button>
            </dialog>
        </div>
    );
}