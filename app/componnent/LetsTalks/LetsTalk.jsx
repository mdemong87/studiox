import Image from "next/image";
import profileImage from "../../../public/profile-Image.png";
import styles from "../../../styles/LetsTalk/LetsTalk.module.css";
import Container from "../Container";
import SendInquiry from "./SendInquiry";

const LetsTalk = () => {
    return (
        <section className={styles.letstalk}>
            <Container>
                <div className={styles.letstalk__content}>
                    <div className={styles.letstalk__content_textWrper}>
                        <div className={styles.letstalk__content_text}>
                            <h1>Have a project idea in mind? Let's get started</h1>
                            <p>
                                We will schedule a call to discuss your idea. After discovery sessions, we'll send a proposal, and upon approval, we'll get started.
                            </p>
                        </div>
                        <div className={styles.profiledivWrper}>
                            <div className={styles.profileImageWrper}>
                                <Image className={styles.profileImage} src={profileImage} width={1000} height={1000} alt="Profile-Image" />
                            </div>

                            <div className={styles.profileImageText}>
                                <h3>Md Emon Hossen</h3>
                                <span>Founder & CEO , StudioX</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.letstalk__content_form}>
                        <div className={styles.nameFlield}>
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" name="name" id="" placeholder="Jhon Smith" />
                        </div>

                        <div className={styles.nameFlieldafterWrper}>
                            <div className={styles.nameFlield}>
                                <label htmlFor="name">Company Name:</label>
                                <input type="text" name="name" id="" placeholder="Ex. Tesla Inc" />
                            </div>
                            <div className={styles.nameFlield}>
                                <label htmlFor="name">Email:</label>
                                <input type="email" name="name" id="" placeholder="you@example.com" />
                            </div>
                        </div>

                        <div className={styles.nameFlieldafterWrper}>
                            <div className={styles.nameFlield}>
                                <label htmlFor="name">Service Required:</label>
                                <input type="text" name="name" id="" placeholder="Jhon Smith" />
                            </div>
                            <div className={styles.nameFlield}>
                                <label htmlFor="name">Project Budget:</label>
                                <input type="text" name="name" id="" placeholder="Jhon Smith" />
                            </div>
                        </div>


                        <div className={styles.nameFlield}>
                            <label htmlFor="name">Project Details:</label>
                            <textarea placeholder="Tell us more about your idea..." name="" id=""></textarea>
                        </div>


                        <div className={styles.nameFlield}>
                            <SendInquiry />
                        </div>


                    </div>
                </div>
            </Container>
        </section>
    );
}

export default LetsTalk;
