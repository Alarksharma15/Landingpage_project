"use client";

import { motion } from "framer-motion";

export function Background() {
    return (
        <div className="fixed inset-0 min-h-screen w-full -z-50 overflow-hidden pointer-events-none">
            {/* Grid Overlay */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)" }}
            />

            {/* Moving Blobs */}
            <motion.div
                animate={{
                    x: [-100, 100, -100],
                    y: [-100, 50, -100],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [100, -100, 100],
                    y: [0, 100, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"
            />
        </div>
    );
}
