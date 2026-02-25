import styles from "./Vault.module.css";
import Link from "next/link";

const portfolioItems = [
    {
        id: 1,
        title: "Cinematic Narratives",
        category: "Storytelling",
        link: "https://www.instagram.com/rakshanavhule?igsh=OHh4YzE4amd1aHpk",
        description: "Fast-paced, engaging reels optimized for maximum social media impact."
    },
    {
        id: 2,
        title: "Relatable & Reflective",
        category: "Short-Form",
        link: "https://www.facebook.com/share/r/1BwyWreNfz/",
        description: "Videos that feel like an inner monologue—thoughts about pressure, growth, and becoming."
    },
    {
        id: 3,
        title: "Rotaract Initiatives",
        category: "Event Highlight",
        link: "https://www.instagram.com/reel/DFZ8v1_TjoA/?igsh=b205eWQzdTN2cnp3",
        description: "Comprehensive video campaigns blending storytelling with call-to-action messaging."
    },
    {
        id: 4,
        title: "The Editverse",
        category: "Visuals",
        link: "https://www.instagram.com/rakshanavhule?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        description: "Experimental narrative-driven content showcasing advanced DaVinci Resolve techniques."
    }
];

export default function Vault() {
    return (
        <section className={styles.vaultSection} id="work">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>The <span className={styles.accent}>Vault</span></h2>
                    <p className={styles.subtitle}>Unlock past projects and visual experiments.</p>
                </div>

                <div className={styles.grid}>
                    {portfolioItems.map((item, index) => (
                        <Link href={item.link} key={item.id} className={`${styles.card} play-interactive`} target="_blank" rel="noopener noreferrer">
                            <div className={styles.cardContent}>
                                <div className={styles.levelBadge}>LVL 0{index + 1}</div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardCategory}>{item.category}</p>
                                <div className={styles.cardOverlay}>
                                    <p className={styles.cardDesc}>{item.description}</p>
                                    <span className={styles.viewLink}>View Project &rarr;</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
