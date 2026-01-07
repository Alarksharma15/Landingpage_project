"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface BentoCardProps {
    title: string;
    icon: LucideIcon;
    className?: string;
}

export function BentoCard({ title, icon: Icon, className }: BentoCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300",
                "hover:shadow-2xl hover:shadow-primary/20",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 58, 237, 0.4),
              transparent 80%
            )
          `,
                }}
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 bg-noise opacity-20" />

            <div className="z-10 bg-white/5 p-4 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors duration-500 border border-white/5 group-hover:border-primary/20">
                <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </div>

            <h3 className="z-10 text-lg font-medium text-white/90 group-hover:text-white transition-colors tracking-wide">
                {title}
            </h3>
        </div>
    );
}
