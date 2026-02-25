"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isPlayHovering, setIsPlayHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.closest("a") || target.closest("button")) {
                // Assume anything with a specific class gets the play hover
                if (target.classList.contains("play-interactive") || target.closest(".play-interactive")) {
                    setIsPlayHovering(true);
                } else {
                    setIsHovering(true);
                }
            } else {
                setIsHovering(false);
                setIsPlayHovering(false);
            }
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    let cursorClass = "custom-cursor";
    if (isPlayHovering) cursorClass += " play-hover";
    else if (isHovering) cursorClass += " hover";

    return (
        <div
            className={cursorClass}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
}
