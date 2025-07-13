"use client"

import styles from "@/styles/AfterHero/AfterHero.module.css";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { ImCross } from "react-icons/im";


export default function AfterHero() {

    const [showreel, setshowreel] = useState(false);


    const textarray = ['●', ' ', 'W', 'a', 't', 'c', 'h', ' ', 'o', 'u', 'r', ' ', 's', 'h', 'o', 'w', ' ', 'r', 'e', 'e', 'l', '●', ' ', 'W', 'a', 't', 'c', 'h', ' ', 'o', 'u', 'r', ' ', 's', 'h', 'o', 'w', ' ', 'r', 'e', 'e', 'l',];


    return (
        <div className={styles.afterHero}>
            <div>
                <div>
                    <div onClick={() => setshowreel(true)} className={styles.circleBtnWrper}>
                        <div className={styles.showReeltext}>
                            {
                                textarray.map((char, index) => {
                                    const digr = index * 8.5;
                                    return (
                                        <span className={styles.showReelChar} style={{ transform: `rotate(${digr}deg)` }} key={index}>{char}</span>
                                    )
                                })
                            }
                        </div>
                        <FaPlay className={styles.btnIcon} />
                    </div>
                </div>

                {/* vedio componnent */}
                {
                    showreel && <div className={styles.vedioWrper}>
                        <div>
                            <video className={styles.vedioContainer} controls={true} autoPlay={true}>
                                <source src={"https://res.cloudinary.com/dyffuhups/video/upload/v1709110461/Main_Comp_1_edjxzx.mp4"} type="video/mp4" />
                            </video>
                            <div onClick={() => setshowreel(false)} className={styles.crossWrper}>
                                <ImCross className={styles.crossIcon} />
                            </div>
                        </div>
                    </div>
                }




            </div>
        </div>
    )
}