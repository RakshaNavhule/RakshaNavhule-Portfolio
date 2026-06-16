"use client";

import styles from "./Nav.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className={styles.logo}>
                Raksha Navhule
            </div>
            <ul className={styles.navLinks}>
                {["Home", "Story", "Experience", "Work", "Brands"].map((item, i) => (
                    <motion.li
                        key={item}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href={item === "Home" ? "/" : `#${item.toLowerCase()}`}>{item}</Link>
                    </motion.li>
                ))}
            </ul>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link href="#contact" className={styles.ctaButton}>
                    ↳ Let&apos;s Connect
                </Link>
            </motion.div>
        </motion.nav>
    );
}
