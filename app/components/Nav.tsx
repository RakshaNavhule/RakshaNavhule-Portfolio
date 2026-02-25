import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Rakshaa Navhule
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="#story" className="play-interactive">Story</Link></li>
                <li><Link href="#work" className="play-interactive">Vault</Link></li>
                <li><Link href="#brands" className="play-interactive">Brands</Link></li>
            </ul>
            <Link href="#contact" className={`${styles.ctaButton} play-interactive`}>
                Collaborate
            </Link>
        </nav>
    );
}
