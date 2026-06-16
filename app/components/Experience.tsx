"use client";

import Image from "next/image";
import styles from "./Experience.module.css";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any
    }
};

const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } as any
    }
};

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <div className={styles.container}>
                <div className={styles.infoSection}>
                    <div className={styles.experienceBlock}>
                        <h3 className={styles.infoTitle}>Club Roles & <span className={styles.accent}>Experience</span></h3>
                        <motion.div
                            className={styles.experienceList}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div className={styles.experienceItem} variants={itemVariants}>
                                <motion.div
                                    className={styles.logoWrapper}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { type: "spring", stiffness: 400, damping: 10 }
                                    }}
                                >
                                    <Image src="/Rotractlogo.png.png" alt="Rotaract Logo" width={100} height={100} className={styles.clubLogo} />
                                </motion.div>
                                <div className={styles.roleInfo}>
                                    <span className={styles.roleTitle}>Design & Visual Communication Director</span>
                                    <span className={styles.roleClub}>Rotaract Club of Atria IT</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.experienceItem} variants={itemVariants}>
                                <motion.div
                                    className={styles.logoWrapper}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: -5,
                                        transition: { type: "spring", stiffness: 400, damping: 10 }
                                    }}
                                >
                                    <Image src="/cyberseclogo.png.png" alt="Cybersec Logo" width={100} height={100} className={styles.clubLogo} />
                                </motion.div>
                                <div className={styles.roleInfo}>
                                    <span className={styles.roleTitle}>Social Media Lead</span>
                                    <span className={styles.roleClub}>Cyber Security Club</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.experienceItem} variants={itemVariants}>
                                <motion.div
                                    className={styles.logoWrapper}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { type: "spring", stiffness: 400, damping: 10 }
                                    }}
                                >
                                    <Image src="/tedxlogo.png.png" alt="TEDx Logo" width={100} height={100} className={styles.clubLogo} />
                                </motion.div>
                                <div className={styles.roleInfo}>
                                    <span className={styles.roleTitle}>Social Media Team</span>
                                    <span className={styles.roleClub}>TEDx Atria IT</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.experienceVideos}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.3, delayChildren: 0.4 } }
                        }}
                    >
                        <motion.div className={styles.experienceVideoItem} variants={videoVariants}>
                            <motion.div
                                className={styles.videoContent}
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <video src="/cypher.mp4.mp4" autoPlay loop muted playsInline className={styles.clubVideo} />
                                <span className={styles.videoLabel}>Cypher Highlight</span>
                            </motion.div>
                            <motion.a
                                href="https://www.instagram.com/reel/DAqelfTAqWB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.videoLink}
                                whileHover={{ x: 5 }}
                            >
                                View on Instagram &rarr;
                            </motion.a>
                        </motion.div>
                        <motion.div className={styles.experienceVideoItem} variants={videoVariants}>
                            <motion.div
                                className={styles.videoContent}
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <video src="/cypherHachathon.mp4.mp4" autoPlay loop muted playsInline className={styles.clubVideo} />
                                <span className={styles.videoLabel}>Cypher Hackathon</span>
                            </motion.div>
                            <motion.a
                                href="https://www.instagram.com/reel/DFZ8v1_TjoA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.videoLink}
                                whileHover={{ x: 5 }}
                            >
                                View on Instagram &rarr;
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
