'use client'

import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import styles from "../../../styles/LetsTalk/SendInquiry.module.css";

const SendInquiry = () => {

    const [isloading, setisloading] = useState(false);



    function handleSend() {
        setisloading(true);
        setTimeout(() => {
            setisloading(false);
        }, 5000);
    }

    return (
        <button onClick={() => { handleSend() }} disabled={isloading} className={styles.sendinquiryBtn}>
            {
                isloading ? (
                    <BiLoaderAlt className={styles.loaderIcons} />
                ) : (
                    <p className={styles.sendinqueryspan}>Send Inquiry</p>
                )
            }
        </button>
    )
}

export default SendInquiry;