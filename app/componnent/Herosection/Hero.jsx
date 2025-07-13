import marquee1 from "@/public/marquee1.jpg";
import marquee2 from "@/public/marquee2.jpg";
import marquee3 from "@/public/marquee3.jpg";
import marquee4 from "@/public/marquee4.jpg";
import styles from "@/styles/Herosection/Hero.module.css";
import Image from "next/image";
import Container from "../Container";
import ActionBtn from "../Header/ActionBtn";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroSectionWrper}>
                <div>
                    <Container>
                        <div className={styles.frsitDivContentWrp}>
                            <h1>
                                Custom Web Development Company
                            </h1>
                            <p>
                                Engineering Websites for Superior Performance
                            </p>

                            <div className={styles.actionBtnWrper}>
                                <ActionBtn />
                            </div>

                            <div className={styles.scrollAnimatonWrper}>
                                <div className={styles.scrollDot} />
                            </div>

                        </div>
                    </Container>
                </div>
                <div className={styles.secondDivContentWrp}>

                    <div>
                        <div className={`${styles.marqueeItemWrper} ${styles.one}`}>
                            <div>
                                <Image src={marquee1} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee2} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee3} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee4} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee1} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee2} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee3} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee4} className={styles.marqueeImage} alt="project-image" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={`${styles.marqueeItemWrper} ${styles.two}`}>
                            <div>
                                <Image src={marquee1} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee2} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee3} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee4} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee1} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee2} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee3} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee4} className={styles.marqueeImage} alt="project-image" />
                            </div>
                        </div>
                    </div>





                    <div>
                        <div className={`${styles.marqueeItemWrper} ${styles.three}`}>
                            <div>
                                <Image src={marquee1} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee2} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee3} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee4} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee1} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee2} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee3} className={styles.marqueeImage} alt="project-image" />
                            </div>
                            <div>
                                <Image src={marquee4} className={styles.marqueeImage} alt="project-image" />
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </div >
    )
}
