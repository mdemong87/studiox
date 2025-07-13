import { MenuItem } from "@/app/componnent/Header/MenuItem";
import styles from "@/styles/Header/Navigation.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";



const itemIds = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Work",
    link: "/work"
  },
  {
    title: "Services",
    link: "/services"
  },
  {
    title: "about",
    link: "/about"
  },
  {
    title: "contact",
    link: "/contact"
  },
];


const menuItemVariant = {
  open: {
    // display: "block",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    // display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants = {
  open: {
    width: "100vw",
    x: 0,
    display: "block",
    visibility: "visible",
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
      width: { stiffness: 500, velocity: -50, delay: .20 }
    }

  },
  closed: {
    width: "0vw",
    x: -50,
    visibility: "hidden",
    display: "none",
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
      width: { stiffness: 500 }
    }
  }
};

export const Navigation = ({ toggle }) => (
  <motion.div
    className={styles.navigationUL}
    variants={variants}
  >

    <motion.div variants={menuItemVariant} className={styles.meunuPluAddressWrper}>
      <div className={styles.meunuWrper}>
        <p>menu</p>
        <ul>
          {itemIds.map((item, index) => (
            <MenuItem toggle={toggle} nav={item} key={index} />
          ))}

        </ul>
      </div>



      <div className={styles.addressWrper}>
        <div>
          <Link className={styles.addressLike} href={'/'}>
            hello@studiox.com
          </Link>
          <Link className={styles.addressLike} href={'/'}>
            +880 1986 404986
          </Link>
        </div>
        <div className={styles.socialWrperWper}>
          <Link href={'/'} className={styles.socialWrper}>
            <FaFacebookF className={styles.socialIcon} />
          </Link>
          <Link href={'/'} className={styles.socialWrper}>
            <FaInstagram className={styles.socialIcon} />
          </Link>
          <Link href={"/"} className={styles.socialWrper}>
            <FaLinkedin className={styles.socialIcon} />
          </Link>
          <Link href={"/"} className={styles.socialWrper}>
            <FaYoutube className={styles.socialIcon} />
          </Link>
        </div>


      </div>



    </motion.div>


  </motion.div>
);


