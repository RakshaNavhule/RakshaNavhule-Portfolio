import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.glowOrb} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Final Level: <br /><span className={styles.accent}>Initiate Action</span></h2>
                    <p className={styles.subtitle}>
                        Ready to bring your vision to life? Let&apos;s collaborate.
                    </p>

                    <div className={styles.linksGrid}>
                        <a
                            href="https://www.instagram.com/rakshanavhule?igsh=OHh4YzE4amd1aHpk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.contactCard} play-interactive`}
                        >
                            <span className={styles.cardIcon}>IG</span>
                            <h3 className={styles.cardTitle}>Instagram</h3>
                            <p className={styles.cardDesc}>@rakshanavhule</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/raksha-navhule-43b99a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.contactCard} play-interactive`}
                        >
                            <span className={styles.cardIcon}>IN</span>
                            <h3 className={styles.cardTitle}>LinkedIn</h3>
                            <p className={styles.cardDesc}>Raksha Navhule</p>
                        </a>

                        <a
                            href="mailto:navhule@gmail.com"
                            className={`${styles.contactCard} play-interactive`}
                        >
                            <span className={styles.cardIcon}>EM</span>
                            <h3 className={styles.cardTitle}>Email</h3>
                            <p className={styles.cardDesc}>navhule@gmail.com</p>
                        </a>

                        <a
                            href="tel:9071909697"
                            className={`${styles.contactCard} play-interactive`}
                        >
                            <span className={styles.cardIcon}>PH</span>
                            <h3 className={styles.cardTitle}>Phone</h3>
                            <p className={styles.cardDesc}>+91 9071909697</p>
                        </a>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Raksha Navhule. Built with precision and passion.</p>
            </footer>
        </section>
    );
}
