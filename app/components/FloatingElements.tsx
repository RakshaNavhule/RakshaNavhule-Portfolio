"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FloatingElements() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const rotateS = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <div ref={ref} className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Organic Blobs */}
            <motion.svg
                style={{ y: y1, rotate: rotateS }}
                className="absolute top-[15%] left-[5%] w-64 h-64 opacity-10"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="var(--accent-green)" d="M44.7,-76.4C58.3,-69.2,70.1,-57.3,77.9,-43.3C85.7,-29.3,89.5,-13.2,88,-2.6C86.5,8,79.7,13.1,72.6,27.1C65.5,41.2,58.1,64.2,44.1,74.7C30.1,85.2,9.4,83.2,-8.1,77.3C-25.7,71.3,-40.1,61.4,-52.8,50.1C-65.4,38.8,-76.3,26.1,-81.4,11.3C-86.4,-3.5,-85.7,-20.3,-78.3,-34.7C-70.9,-49.2,-56.9,-61.2,-42.2,-67.9C-27.5,-74.6,-13.8,-76,-0.1,-75.8C13.5,-75.7,27.1,-73.9,44.7,-76.4Z" transform="translate(100 100)" />
            </motion.svg>

            <motion.svg
                style={{ y: y2 }}
                className="absolute top-[60%] right-[2%] w-96 h-96 opacity-5"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="var(--text-primary)" d="M38.1,-65.4C50.3,-58.5,61.9,-49.5,69.5,-37.9C77.1,-26.3,80.7,-12.1,79.8,1.4C78.9,14.9,73.5,27.7,65,38.5C56.5,49.3,44.9,58,32.3,64.6C19.7,71.3,6.2,75.9,-7.7,75.3C-21.6,74.7,-35.8,68.9,-47.1,60C-58.4,51,-66.8,38.8,-72.2,25.4C-77.5,12.1,-79.8,-2.4,-77.3,-16.2C-74.8,-30,-67.6,-43.1,-56.6,-50.5C-45.6,-57.9,-30.9,-59.6,-18.1,-65.3C-5.3,-71,5.6,-80.6,18.1,-79.8C30.6,-78.9,44.7,-67.6,38.1,-65.4Z" transform="translate(100 100)" />
            </motion.svg>

            {/* Geometric Lines */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[40%] right-[10%] w-32 h-[1px] bg-accent-green opacity-20 rotate-45"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[20%] left-[5%] w-48 h-[1px] bg-text-primary opacity-10 -rotate-12"
            />
        </div>
    );
}
