/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./Brands.module.css";

const brands = [
    { name: "Sweet Karam Coffee", url: "https://www.instagram.com/reel/DQMSlMzkq1K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "https://logo.clearbit.com/sweetkaramcoffee.in" },
    { name: "Earthy Scent", url: "https://www.instagram.com/reel/DQ6iX4_knPn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "https://logo.clearbit.com/earthyscent.store" },
    { name: "Cherry App", url: "https://www.instagram.com/reel/DRwl8YDEvLL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "https://logo.clearbit.com/cherryapp.in" },
    { name: "Kala Curry", url: "https://www.instagram.com/reel/DSXPNT2Etmw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "https://logo.clearbit.com/kalacurry.in" },
    { name: "Feelworthy", url: "https://www.instagram.com/reel/DTKubmHEv5J/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "https://logo.clearbit.com/feelworthy.in" },
    { name: "KSHM", url: "https://www.instagram.com/reel/DUS0viIkkLB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", logo: "https://logo.clearbit.com/shopkshm.com" },
    { name: "Silverfied", url: "https://www.silverfied.in/", logo: "https://logo.clearbit.com/silverfied.in" },
];

export default function Brands() {
    return (
        <section className={styles.brandsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Trusted By Brands</h2>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeContent}>
                        {brands.map((brand, i) => (
                            <a href={brand.url} key={i} target="_blank" rel="noopener noreferrer" className={`${styles.brandCard} play-interactive`}>
                                <img src={brand.logo} alt="" className={styles.brandLogo} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </a>
                        ))}
                        {/* Duplicated for seamless loop */}
                        {brands.map((brand, i) => (
                            <a href={brand.url} key={`dup-${i}`} target="_blank" rel="noopener noreferrer" className={`${styles.brandCard} play-interactive`}>
                                <img src={brand.logo} alt="" className={styles.brandLogo} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
