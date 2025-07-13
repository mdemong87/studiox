import styles from "../../../styles/AfterHero/AchivementCounter.module.css";
import Container from "../Container";

const AchivementCounter = () => {
    return (
        <div>
            <Container>
                <p className={styles.achimentsectionHeading}>Trusted by top brands and 100,000+ creatives worldwide.</p>
                <div className={styles.counderBoxWrper}>
                    <div>
                        <h2>130+</h2>
                        <p>Clients</p>
                    </div>
                    <div>
                        <h2>9000+</h2>
                        <p>Projects</p>
                    </div>
                    <div>
                        <h2>2100+</h2>
                        <p>Contrays</p>
                    </div>
                    <div>
                        <h2>64400+</h2>
                        <p>Clients</p>
                    </div>
                    <div>
                        <h2>66560+</h2>
                        <p>Reached</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AchivementCounter;