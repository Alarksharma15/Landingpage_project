"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "What is Lumina SEO?",
        a: "Lumina SEO is a next-generation analytics platform that uses AI to uncover hidden keyword opportunities, track real-time rankings, and detect technical issues before they impact your traffic."
    },
    {
        q: "Who is Lumina for?",
        a: "We built Lumina for modern marketing teams, SEO agencies, and enterprise businesses who need granular data without the clutter of legacy tools."
    },
    {
        q: "How does the 'Shared Keywords' feature work?",
        a: "Our overlap analysis engine scans millions of SERPs to find exactly where you compete with your rivals, highlighting gaps you can exploit."
    },
    {
        q: "What kind of keyword analysis is included?",
        a: "We offer comprehensive metrics including Search Volume, CPC, Difficulty (KD), User Intent (Informational vs Navigational), and Historical Trends."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative z-10 bg-black/40">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        FAQ
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">Frequently asked questions</h2>
                    <p className="mt-4 text-muted-foreground">Haven't found what you're looking for? Contact us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={cn(
                                "border border-white/5 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300",
                                openIndex === i ? "border-primary/30 bg-white/10" : "hover:border-white/10"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={cn("text-lg font-medium", openIndex === i ? "text-white" : "text-white/80")}>
                                    {faq.q}
                                </span>
                                <span className="p-2 rounded-full bg-white/5 text-white/50">
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
