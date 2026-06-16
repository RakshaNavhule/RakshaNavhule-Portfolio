"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Link from "next/link";
import Story from "./components/Story";
import Vault from "./components/Vault";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import FadeIn from "./components/FadeIn";
import Experience from "./components/Experience"; // Added import
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.container}>
      <Nav />

      <section className={styles.heroSection}>
        {/* Animated Background Blobs */}
        <motion.div
          className={styles.blob1}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className={styles.blob2}
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>

        {/* Large Overlapping Typography */}
        <div className={styles.heroTextContainer}>
          <FadeIn direction="right" delay={0.2}>
            <p className={styles.heroIntro}>Hey, I&apos;m a</p>
          </FadeIn>
          <FadeIn direction="right" delay={0.4}>
            <h1 className={styles.heroVideo}>Video</h1>
          </FadeIn>
          <FadeIn direction="right" delay={0.6}>
            <Link href="#experience" className={styles.heroCTA}>
              Explore Work <span className={styles.arrow}>&rarr;</span>
            </Link>
          </FadeIn>
        </div>

        {/* Central Character Illustration */}
        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <Image
            src="/hero-character.png"
            alt="Aesthetic Character Illustration"
            width={800}
            height={800}
            className={styles.heroImage}
            priority
          />
        </motion.div>

        {/* Overlapping Foreground Typography */}
        <div className={styles.heroForegroundText}>
          <FadeIn direction="left" delay={0.8}>
            <h2 className={styles.heroEditor}>Editor</h2>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className={styles.mouse}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.wheel}></div>
          </motion.div>
        </motion.div>
      </section>

      <FadeIn>
        <Story />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Vault />
      </FadeIn>
      <FadeIn>
        <Brands />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}