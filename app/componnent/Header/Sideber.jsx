'use client'

import { MenuToggle } from "@/app/componnent/Header/MenuToggle";
import { Navigation } from "@/app/componnent/Header/Navigation";
import { useDimensions } from "@/helper/use-dimension";
import styles from "@/styles/Header/SideBer.module.css";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(149deg, rgba(2, 0, 36, 1) 1%, rgba(9, 9, 121, 1) 6%, rgba(7, 63, 148, 1) 26%, rgba(9, 9, 121, 1) 46%, rgba(9, 9, 121, 1) 57%, rgba(9, 9, 121, 1) 70%, rgba(9, 9, 121, 1) 78%, rgba(9, 9, 121, 1) 87%, rgba(8, 25, 131, 1) 88%, rgba(0, 212, 255, 1) 100%)",

    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2
    }
  }),
  closed: () => ({
    clipPath: `circle(0px at 0vw 0vh)`,  //60px
    height: "100vh",
    width: "100vw",
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2
    }
  }),
};






export default function Example() {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);



  return (
    <motion.nav
      className={styles.nav}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={styles.sidebackground} variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}