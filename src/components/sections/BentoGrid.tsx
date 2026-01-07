"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { Calendar, Smartphone, TrendingUp, Layers, BarChart3, Lightbulb } from "lucide-react";

const features = [
    {
        title: "Seasonality Detection",
        icon: Calendar,
        className: "md:col-span-1",
    },
    {
        title: "Mobile First Indexing",
        icon: Smartphone,
        className: "md:col-span-1",
    },
    {
        title: "Rank Spotter",
        icon: TrendingUp,
        className: "md:col-span-1",
    },
    {
        title: "Cannibalization Alert",
        icon: Layers,
        className: "md:col-span-2",
    },
    {
        title: "Market Intel",
        icon: BarChart3,
        className: "md:col-span-1",
    },
    {
        title: "Keyword Opportunities",
        icon: Lightbulb,
        className: "md:col-span-3", // Full width or large
    },
];

export function BentoGrid() {
    return (
        <section id="features" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                        Identify Issues <span className="text-gradient">Instantly</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our AI-powered grid detects anomalies, opportunities, and technical debts before they impact your ranking.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {features.map((feature, i) => (
                        <BentoCard
                            key={i}
                            title={feature.title}
                            icon={feature.icon}
                            className={feature.className}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
