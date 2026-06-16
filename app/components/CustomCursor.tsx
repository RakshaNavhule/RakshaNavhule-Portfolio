"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Fast spring for the core dot
    const dotX = useSpring(cursorX, { damping: 30, stiffness: 800 });
    const dotY = useSpring(cursorY, { damping: 30, stiffness: 800 });

    // Slower spring for the trailing ring
    const ringX = useSpring(cursorX, { damping: 20, stiffness: 150 });
    const ringY = useSpring(cursorY, { damping: 20, stiffness: 150 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <div className={styles.cursorWrapper}>
                {/* Trailing Ring */}
                <motion.div
                    style={{
                        x: ringX,
                        y: ringY,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    animate={{
                        width: isHovered ? 60 : 32,
                        height: isHovered ? 60 : 32,
                        opacity: isHovered ? 0.3 : 0.5,
                    }}
                    className={styles.cursorRing}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                />

                {/* Core Dot */}
                <motion.div
                    style={{
                        x: dotX,
                        y: dotY,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    animate={{
                        scale: isHovered ? 0.5 : 1,
                    }}
                    className={styles.cursorDot}
                />
            </div>
        </>
    );
}
