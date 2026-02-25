import styles from "./page.module.css";
import Link from "next/link";
import Nav from "./components/Nav";
import Story from "./components/Story";
import Vault from "./components/Vault";
import Brands from "./components/Brands";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className={styles.container}>
      <Nav />
      {/* Dynamic Background Elements */}
      <div className={styles.starfield}></div>
      <div className={styles.glowOrb} style={{ top: '-10%', left: '-10%' }} />
      <div className={styles.glowOrb} style={{ top: '20%', right: '-20%', animationDelay: '2s' }} />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>▷</span>
            Available for Projects
          </div>

          <h1 className={styles.heroTitleMain}>
            Hi, I&apos;m <span className={styles.accentText}>Raksha Navhule</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Content Creator &bull; Video Editor &bull; Engineering Student
          </p>

          <p className={styles.heroDescription}>
            3rd year Information Science & Engineering student at Atria Institute of Technology with 2+ years of experience crafting compelling visual narratives and innovative content.
          </p>

          <div className={styles.heroButtons}>
            <Link href="#work" className={`${styles.btnPrimary} play-interactive`}>
              View My Work
            </Link>
            <Link href="#contact" className={`${styles.btnSecondary} play-interactive`}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Story />
      <Vault />
      <Brands />
      <Contact />
    </main>
  );
}