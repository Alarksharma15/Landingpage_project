"use client";

import { motion } from "framer-motion";

const companies = [
    "QNB", "BMW", "Delivery Hero", "MediaMarkt", "Bayer", "Amazon",
    "QNB", "BMW", "Delivery Hero", "MediaMarkt", "Bayer", "Amazon"
];

export function TrustedBy() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden relative z-10">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Trusted by industry leaders</p>
            </div>

            <div className="flex relative w-full overflow-hidden mask-linear-gradient">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-16 pr-16 whitespace-nowrap"
                >
                    {companies.map((company, i) => (
                        <span
                            key={i}
                            className="text-2xl font-display font-bold text-white/30 hover:text-white/60 transition-colors cursor-default"
                        >
                            {company}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {companies.map((company, i) => (
                        <span
                            key={`dup-${i}`}
                            className="text-2xl font-display font-bold text-white/30 hover:text-white/60 transition-colors cursor-default"
                        >
                            {company}
                        </span>
                    ))}
                </motion.div>

                {/* Fade masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    );
}
