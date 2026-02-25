import styles from "./Story.module.css";

export default function Story() {
    return (
        <section className={styles.storySection} id="story">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>The <span className={styles.accent}>Story</span></h2>
                    <div className={styles.line} />
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.textContent}>
                        <p className={styles.leadText}>
                            My content sits at the intersection of storytelling, relatability, and visual simplicity.
                        </p>
                        <p className={styles.paragraph}>
                            I create short-form videos and edits that reflect everyday thoughts, quiet emotions, and moments we usually don&apos;t talk about—but all feel deeply. My work isn&apos;t about loud effects or over-polished perfection. It&apos;s about flow, timing, and feeling.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statBox}>
                                <h3 className={styles.statValue}>2+</h3>
                                <p className={styles.statLabel}>Years Experience</p>
                            </div>
                            <div className={styles.statBox}>
                                <h3 className={styles.statValue}>Pr/Dv</h3>
                                <p className={styles.statLabel}>Core Tools</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pillarsContainer}>
                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>01</div>
                            <h4 className={styles.pillarTitle}>Relatable & Reflective</h4>
                            <p className={styles.pillarText}>
                                Creating videos that feel like an inner monologue. The goal isn&apos;t to give answers, but to make people feel seen.
                            </p>
                        </div>

                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>02</div>
                            <h4 className={styles.pillarTitle}>Short-Form Storytelling</h4>
                            <p className={styles.pillarText}>
                                Telling small stories in a short span of time—through pacing, cuts, music, and subtle visuals.
                            </p>
                        </div>

                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>03</div>
                            <h4 className={styles.pillarTitle}>Visual & Edit-Focused</h4>
                            <p className={styles.pillarText}>
                                Shaping raw footage into something cohesive and meaningful, balancing energy with emotional rhythm.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
