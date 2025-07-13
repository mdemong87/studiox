'use client'


import Container from "@/app/componnent/Container";
import HeaderLogo from "@/app/componnent/Header/HeaderLogo";
import Sideber from "@/app/componnent/Header/Sideber";
import styles from "@/styles/Header/Header.module.css";
import { useEffect, useState } from "react";
import ActionBtn from "./ActionBtn";

export default function Header() {


    const [sheight, setsheight] = useState(0);


    useEffect(() => {
        window.onscroll = () => {
            const scrollHeight = window.scrollY;
            setsheight(scrollHeight);
        }
    }, [])



    return (
        <header className={`${styles.header} ${sheight > 100 ? styles.blueBg : styles.transparentBg}`}>
            <Container>
                <div className={styles.headerWrper}>
                    <HeaderLogo />
                    <div className={styles.ActionBtnAndSideberWrper}>
                        <div className={styles.letsTalkWper}>
                            <ActionBtn />
                        </div>
                        <div className={styles.sideberWrperforheader}>
                            <Sideber />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}
