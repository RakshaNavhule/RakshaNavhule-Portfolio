"use client";

import Image from "next/image";
import styles from "./Vault.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    videoSrc: string;
    link: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "2011 – A Nostalgic Throwback",
        description: "A storytelling edit reflecting on the nostalgia and cultural memories of 2011. The video resonated widely with audiences and gained 1.1M+ views and 184K+ likes on Instagram.",
        videoSrc: "/2011.mp4.mp4",
        link: "https://www.instagram.com/reel/DPd0dwOjdXS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 2,
        title: "Not a Proud Indian – A Thought-Provoking Edit",
        description: "A powerful storytelling video addressing social reflection and perspective. The edit sparked strong engagement, receiving 2M+ views and 292K+ likes on Instagram.",
        videoSrc: "/not a proud indian.mp4.mp4",
        link: "https://www.instagram.com/reel/DR1wAy2EvTK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 3,
        title: "Analog Watches – Timeless Aesthetics",
        description: "A visually engaging edit celebrating the elegance and timeless appeal of analog watches. The video reached 254K+ views and 37K+ likes on Instagram.",
        videoSrc: "/analogwatch.mp4.mp4",
        link: "https://www.instagram.com/reel/DPoKR8Vkvf_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 4,
        title: "Indian Transport – The Auto Rickshaw Story",
        description: "A creative edit highlighting the everyday experience of Indian transportation and the cultural presence of auto rickshaws. The video gained 68.5K+ views and 13.3K+ likes.",
        videoSrc: "/auto_video.mp4.mp4",
        link: "https://www.instagram.com/reel/DP_oR61klVE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 5,
        title: "Kalacurry – Brand Story Video",
        description: "A brand-focused creative edit for Kalacurry, combining visual storytelling and clean pacing to showcase the identity of the brand. One of my personal favorite edits.",
        videoSrc: "/Kalacuryy.mp4.mp4",
        link: "https://www.instagram.com/reel/DSXPNT2Etmw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 6,
        title: "Dressing Sense – Style & First Impressions",
        description: "A creative social media edit highlighting how dressing sense influences first impressions and personal style. The video performed strongly on Instagram, gaining 232K+ views and 31.4K+ likes.",
        videoSrc: "/dressingsense.mp4.mp4",
        link: "https://www.instagram.com/reel/DQwOw0NkpH_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
];

export default function Vault() {
    return (
        <section className={styles.vaultSection} id="work">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Selected <span className={styles.accent}>Works</span></h2>
                    <div className={styles.contentCreationHeader}>
                        <p className={styles.introText}>
                            Alongside my editing work, I also create content on Instagram
                            <a href="https://www.instagram.com/rakshanavhule" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}> (@rakshanavhule)</a>,
                            where I share relatable, creative, and storytelling-based videos. This allows me to experiment with visual storytelling, pacing, and audience engagement while building my own creative voice.
                        </p>
                    </div>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {portfolioItems.length > 0 ? (
                        portfolioItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={styles.videoCard}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6 }
                                    }
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className={styles.videoWrapper}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <video
                                        src={item.videoSrc}
                                        className={styles.mainVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </motion.div>
                                <div className={styles.videoInfo}>
                                    <h3 className={styles.videoTitle}>{item.title}</h3>
                                    <p className={styles.videoDesc}>{item.description}</p>
                                    <motion.a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.viewLink}
                                        whileHover={{ x: 5 }}
                                    >
                                        View on Instagram &rarr;
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >

                                        </motion.span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Premium visual stories coming soon...</p>
                        </div>
                    )}
                </motion.div>

            </div>
        </section>
    );
}
