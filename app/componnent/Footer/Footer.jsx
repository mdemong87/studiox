import styles from "../../../styles/Footer/Footer.module.css";
import Container from "../Container";
import HeaderLogo from "../Header/HeaderLogo";
import FooterWathermarks from "./FooterWatermarks";

const Footer = () => {
    return (
        <footer className={styles.footer_top_wrper}>

            <div className={styles.footer}>
                <Container>
                    <div className={styles.footer__content_wrper}>
                        <HeaderLogo />
                        <div>fdaf</div>
                        <div>fasdf</div>
                        <div>adfdfad</div>
                    </div>
                    <div className={styles.footer__text_copyright}>
                        <p>© 2025-2026 All rights reserved Webysoft || Designed by Webysoft</p>
                    </div>
                </Container>
            </div>

            <FooterWathermarks />
        </footer>
    )
}


export default Footer;