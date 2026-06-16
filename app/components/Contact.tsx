"use client";

import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                <div className={styles.content}>

                    <FadeIn direction="down" delay={0.2}>
                        <div className={styles.preTitleContainer}>
                            <div className={styles.line}></div>
                            <span className={styles.preTitleText}>Reach out anytime</span>
                            <div className={styles.line}></div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <h2 className={styles.title}>
                            Let&apos;s Stay <span className={styles.accent}>Connected</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.6}>
                        <p className={styles.subtitle}>
                            Have a project idea in mind? Let&apos;s collaborate and create<br />something amazing together! ✨
                        </p>
                    </FadeIn>

                    <div className={styles.actionGrid}>
                        <motion.a
                            href="mailto:navhule@gmail.com"
                            className={styles.primaryButton}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            navhule@gmail.com
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryButton}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                        >
                            View Resume ↗
                        </motion.a>
                    </div>

                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.socialRow}>
                    <motion.a
                        href="tel:9071909697"
                        className={styles.socialLink}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        
                    >
                        +91 9071909697 ↗
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/raksha-navhule-43b99a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        
                    >
                        LinkedIn ↗
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/rakshanavhule?igsh=OHh4YzE4amd1aHpk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                
                    >
                        Instagram ↗
                    </motion.a>
                </div>
            </footer>
        </section>
    );
}
