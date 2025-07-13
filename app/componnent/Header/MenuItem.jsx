import styles from "@/styles/Header/MenuItem.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ nav, toggle }) => {



  return (
    <motion.li
      className={styles.menuLi}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link onClick={toggle} href={nav.link} className={styles.menuItemsWrper}>
        {nav.title}
      </Link>
    </motion.li>
  );
};
