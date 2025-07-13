"use client";

import { useEffect, useRef } from "react";
import styles from "../../../styles/Footer/FooterWatermarks.module.css";

const FooterWathermarks = () => {


    const containerRef = useRef(null);
    const textRef = useRef(null);

    function resizeText() {


        const containerWidth = containerRef.current.offsetWidth;
        const text = textRef.current;


        let min = 1;
        let max = 2000;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + "px";

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;

            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = max + "px";

    }


    useEffect(() => {

        resizeText();
        window.addEventListener('resize', resizeText);

        return () => {
            window.removeEventListener('resize', resizeText);
        }

    }, []);



    return (
        <div ref={containerRef} className={styles.waterMarkTextWrper}>
            <h1 ref={textRef} className={styles.waterMarkText}>
                StudioX
            </h1>
        </div>
    )
}

export default FooterWathermarks;