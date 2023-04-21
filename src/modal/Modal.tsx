import { useState } from "react";
import styles from "./Modal.module.css";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function MyModal() {
    const [open, setOpen] = useState(false);
    
    let navigate = useNavigate();
    let location = useLocation();
    let article2 = location.state.article;
    const {section, subsection, abstract, title, url, byline, multimedia} = article2;
    console.log("article2", article2)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <button onClick={onOpenModal}>See More</button>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>hihi</h2>
                <p>anybody home?</p>
                <div className={styles.modalContainer}>
                    <h2>{title}</h2>
                    <p>{byline}</p>
                    <p>{abstract}</p>
                 </div>
            </Modal>
        </div>
    );

    // let navigate = useNavigate();
    // let location = useLocation();
    // let article2 = location.state.article;
    // const {section, subsection, abstract, title, url, byline, multimedia} = article2;
    // console.log("article2", article2)
    
    // function onDismiss() {
    //     navigate(-1);
    // }
    // console.log("byline", byline)

    // return (
    //         <dialog 
    //         className={styles.dialog}
    //         >
    //             <div className={styles.modalContainer}>
    //                 <h2>{title}</h2>
    //                 <p>{byline}</p>
    //                 <p>{abstract}</p>
    //             </div>
    //             <button onClick={onDismiss}>GO BACK</button>
    //         </dialog>
    // );
}