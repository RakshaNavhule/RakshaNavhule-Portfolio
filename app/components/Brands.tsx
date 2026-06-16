/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./Brands.module.css";
import { motion } from "framer-motion";

const brands = [
    { name: "Sweet Karam Coffee", url: "https://www.instagram.com/reel/DQMSlMzkq1K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "/sweetkaram.png.png" },
    { name: "Earthy Scent", url: "https://www.instagram.com/reel/DQ6iX4_knPn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "/earthyscent.png.png" },
    { name: "Cherry App", url: "https://www.instagram.com/reel/DRwl8YDEvLL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "/cherry.png.png" },
    { name: "Kala Curry", url: "https://www.instagram.com/reel/DSXPNT2Etmw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "/kalacurry.png.png" },
    { name: "Feelworthy", url: "https://www.instagram.com/reel/DTKubmHEv5J/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "/feelworthy.png.png" },
    { name: "KSHM", url: "https://www.instagram.com/reel/DUS0viIkkLB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "/kshm.png.png" },
    { name: "Silverfied", url: "https://www.instagram.com/reel/DTk2Y9XEhLh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "/silverfield.png.png" },
];

export default function Brands() {
    return (
        <section id="brands" className={styles.brandsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Brands I've <span className={styles.accent}>Worked With</span></h2>
                <motion.div
                    className={styles.marqueeContainer}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.marqueeContent}>
                        {brands.map((brand, i) => (
                            <motion.a
                                href={brand.url}
                                key={i}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.brandCard}
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </motion.a>
                        ))}
                        {/* Duplicated for seamless loop */}
                        {brands.map((brand, i) => (
                            <motion.a
                                href={brand.url}
                                key={`dup-${i}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.brandCard}
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
