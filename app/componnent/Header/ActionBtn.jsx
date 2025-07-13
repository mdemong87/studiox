import Link from "next/link";
import styles from "../../../styles/Header/ActionBtn.module.css";


const ActionBtn = () => {
    return (
        <Link className={styles.heroletstalkbtn} href={"/contact"}>
            Let's Talk
        </Link>
    )
}

export default ActionBtn;