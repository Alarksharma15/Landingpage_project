"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Globe } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />

            {/* Perspective Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)_translateY(-200px)_scale(2)] opacity-30 origin-top" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:border-primary/30 transition-colors"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-medium text-primary-foreground tracking-widest uppercase bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        V2.0 Now Live
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 tracking-tighter leading-[0.9]"
                >
                    <span className="block text-white mb-2 drop-shadow-lg">Unlock the</span>
                    <span className="text-gradient-primary drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">Future of SEO</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed font-light"
                >
                    Experience the next evolution of search analytics.
                    Real-time insights, cannibalization detection, and market intelligence
                    powered by advanced AI.
                </motion.p>

                {/* Search Input */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative w-full max-w-lg mb-24 group"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                    <div className="relative flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-2 pr-4 transition-all focus-within:border-primary/50 focus-within:bg-white/10 focus-within:shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                        <div className="p-3 bg-white/5 rounded-full mr-4 text-muted-foreground">
                            <Globe className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your domain to analyze..."
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-muted-foreground/50 font-medium"
                        />
                        <button className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Floating Dashboard Mockup */}
                <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, rotateX: 20, z: -100 }}
                    animate={{ opacity: 1, rotateX: 10, z: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="relative w-full max-w-5xl aspect-[16/9] rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg shadow-2xl overflow-hidden group perspective-1000"
                >
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

                    {/* Mockup Content */}
                    <div className="absolute inset-0 flex flex-col p-6 font-mono text-xs text-muted-foreground/50">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.2)]" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]" />
                            </div>
                            <div className="text-[10px] tracking-widest opacity-50">LUMINA-ANALYTICS-V2.EXE</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 h-full">
                            <div className="col-span-1 border-r border-white/5 pr-4 space-y-4">
                                <div className="h-8 bg-white/5 rounded w-3/4 animate-pulse" />
                                <div className="h-4 bg-white/5 rounded w-1/2" />
                                <div className="h-4 bg-white/5 rounded w-2/3" />
                                <div className="h-24 mt-8 bg-gradient-to-b from-primary/10 to-transparent rounded border border-primary/20" />
                            </div>
                            <div className="col-span-3 space-y-4">
                                <div className="flex gap-4 mb-8">
                                    <div className="h-24 flex-1 bg-primary/5 rounded border border-primary/20 shadow-[0_0_20px_rgba(124,58,237,0.05)]" />
                                    <div className="h-24 flex-1 bg-secondary/5 rounded border border-secondary/20" />
                                    <div className="h-24 flex-1 bg-white/5 rounded border border-white/10" />
                                </div>
                                <div className="h-64 bg-gradient-to-t from-primary/5 to-transparent rounded border border-white/5 relative overflow-hidden group-hover:border-primary/20 transition-colors duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-between px-4 pb-0 opacity-40">
                                        {[40, 60, 45, 70, 50, 80, 65, 85, 90, 75].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: 1 + i * 0.1 }}
                                                className="w-full mx-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t backdrop-blur-sm"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
