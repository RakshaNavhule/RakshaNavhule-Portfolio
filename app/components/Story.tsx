"use client";

import Image from "next/image";
import styles from "./Story.module.css";
import { motion } from "framer-motion";

export default function Story() {
    return (
        <section className={styles.storySection} id="story">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>The <span className={styles.accent}>Story</span></h2>
                    <div className={styles.line} />
                </div>

                <div className={styles.contentGrid}>
                    {/* Left side: Biography */}
                    <div className={styles.textContent}>
                        <p className={styles.leadText}>
                            Hey there! I&apos;m Raksha Navhule, a video editor based in Bangalore and currently in my 3rd year of engineering.
                        </p>
                        <p className={styles.paragraph}>
                            I specialize in turning raw footage into engaging, meaningful visual stories. I enjoy the process of shaping clips, pacing moments, and building edits that feel natural yet impactful.
                        </p>
                        <p className={styles.paragraph}>
                            Beyond editing, I&apos;m usually exploring creative ideas, creating content, or finding inspiration in everyday moments.
                        </p>
                        <p className={styles.paragraph}>
                            If you&apos;re passionate about creativity, storytelling, or collaboration, I&apos;d love to connect.
                        </p>

                        {/* Tool Stack Blocks */}
                        <div className={styles.toolsContainer}>
                            <h3 className={styles.toolsHeading}>Software Stack</h3>
                            <div className={styles.toolsGrid}>
                                <div className={styles.toolBlock}>
                                    <Image src="/premiere-logo.png.png" alt="Premiere Pro" width={24} height={24} className={styles.toolLogo} />
                                    <span className={styles.toolName}>Adobe Premiere Pro</span>
                                </div>
                                <div className={styles.toolBlock}>
                                    <Image src="/ae-logo.png" alt="After Effects" width={24} height={24} className={styles.toolLogo} />
                                    <span className={styles.toolName}>Adobe After Effects</span>
                                </div>
                                <div className={styles.toolBlock}>
                                    <Image src="/davinci-logo.png.png" alt="DaVinci Resolve" width={24} height={24} className={styles.toolLogo} />
                                    <span className={styles.toolName}>DaVinci Resolve</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Photo */}
                    <motion.div
                        className={styles.photoContainer}
                        initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            whileHover={{ rotate: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                src="/my-photo.png"
                                alt="Raksha Navhule"
                                width={450}
                                height={560}
                                className={styles.profilePhoto}
                                style={{ transform: 'none' }} // Override CSS transform to use motion
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
