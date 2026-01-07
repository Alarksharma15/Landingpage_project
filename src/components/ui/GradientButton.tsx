"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export function GradientButton({ children, className, variant = "primary", ...props }: GradientButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0, width: 0, height: 0 };
        const x = (clientX - (left + width / 2)) * 0.35;
        const y = (clientY - (top + height / 2)) * 0.35;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "relative group px-8 py-3 rounded-full font-medium transition-colors duration-300",
                "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/50",
                "shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]",
                className
            )}
            {...props as any}
        >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:to-white relative z-10">
                {children}
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        </motion.button>
    );
}
