"use client";

import { GlassContainer } from "@/components/ui/GlassContainer";
import { cn } from "@/lib/utils";
import { ArrowupRight, BarChart3, CheckCircle2, ChevronDown, Filter, Layers, Link as LinkIcon, MoreHorizontal, Search, Settings } from "lucide-react";
import { useState } from "react";

export function FeatureDeepDive() {
    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        Meet <span className="text-gradient">New-Gen</span> <br />
                        Research Experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Backlink Analysis Card */}
                    <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-50 pointer-events-none">
                            <div className="w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                        </div>

                        <div className="relative z-10 mb-12">
                            <h3 className="text-3xl font-display font-bold mb-4">Detailed Backlink <br /> Profile Analysis</h3>
                            <p className="text-muted-foreground text-lg">
                                Uncover backlink sources, anchor texts, and authority scores to optimize your strategy.
                            </p>
                        </div>

                        {/* Mock UI - Dashboard */}
                        <div className="relative rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm shadow-2xl">
                            {/* Toolbar */}
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-white/10" />
                                <div className="w-3 h-3 rounded-full bg-white/10" />
                            </div>

                            <div className="flex gap-6">
                                {/* Donut Chart Mock */}
                                <div className="w-32 h-32 rounded-full border-8 border-primary/20 relative flex items-center justify-center">
                                    <div className="absolute inset-0 border-8 border-primary border-t-transparent border-r-transparent rounded-full rotate-45" />
                                    <div className="text-center">
                                        <div className="text-xl font-bold">85%</div>
                                        <div className="text-[10px] text-muted-foreground">Authority</div>
                                    </div>
                                </div>

                                {/* List */}
                                <div className="flex-1 space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-2 bg-white/10 rounded-full w-full" style={{ width: `${100 - i * 15}%` }} />
                                    ))}
                                    <div className="h-16 mt-4 bg-white/5 rounded border border-white/5" />
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-xl">
                                <BarChart3 className="text-primary w-6 h-6" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-xl">
                                <LinkIcon className="text-secondary w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Compare Card */}
                    <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 p-12 opacity-50 pointer-events-none">
                            <div className="w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
                        </div>

                        {/* Header Mock */}
                        <div className="flex items-center gap-3 mb-8 p-1 bg-white/5 rounded-lg border border-white/5 w-fit">
                            <div className="px-3 py-1 bg-white/10 rounded text-xs font-medium">wope.com</div>
                            <div className="text-muted-foreground text-xs">vs</div>
                            <div className="px-3 py-1 bg-transparent rounded text-xs font-medium text-muted-foreground">semrush.com</div>
                        </div>

                        {/* Capsules */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["daily rank tracking", "serp history", "localized keyword research"].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary/80 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Stats Table */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <h4 className="text-lg font-medium mb-4">Explore Shared Keywords</h4>
                            <div className="grid grid-cols-4 gap-4 text-xs text-muted-foreground mb-2">
                                <div>Volume</div>
                                <div>Trend</div>
                                <div>Position</div>
                                <div>Change</div>
                            </div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-4 gap-4 items-center py-2 border-b border-white/5">
                                    <div className="text-white font-mono">123.4K</div>
                                    <div className="flex gap-0.5 h-3 items-end">
                                        {[4, 6, 3, 7, 4, 8, 5].map((h, i) => <div key={i} className="w-1 bg-primary" style={{ height: `${h * 10}%` }} />)}
                                    </div>
                                    <div className="text-white">12</div>
                                    <div className="text-green-400">+2</div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 items-center py-2">
                                    <div className="text-white font-mono">108.6K</div>
                                    <div className="flex gap-0.5 h-3 items-end">
                                        {[5, 3, 6, 2, 7, 4, 6].map((h, i) => <div key={i} className="w-1 bg-secondary" style={{ height: `${h * 10}%` }} />)}
                                    </div>
                                    <div className="text-white">16</div>
                                    <div className="text-red-400">-4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Keyword Dictionary Table */}
                <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                        <div className="flex items-center gap-4">
                            <h3 className="font-medium text-white">12,345 Results</h3>
                        </div>
                        <div className="flex gap-3">
                            <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/50 text-xs text-muted-foreground flex items-center gap-2">
                                <Search className="w-3 h-3" /> Search
                            </div>
                            <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/50 text-xs text-muted-foreground flex items-center gap-2">
                                <Settings className="w-3 h-3" /> View Options
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-muted-foreground font-medium border-b border-white/10">
                                <tr>
                                    <th className="p-4 font-normal">Keyword</th>
                                    <th className="p-4 font-normal">Volume</th>
                                    <th className="p-4 font-normal">Trend</th>
                                    <th className="p-4 font-normal">Intent</th>
                                    <th className="p-4 font-normal">K.D.</th>
                                    <th className="p-4 font-normal">Pos</th>
                                    <th className="p-4 font-normal">URL</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { k: "wope", v: "132.8K", i: "Navigational", kd: 50, p: 1, c: "green" },
                                    { k: "seo do", v: "29.4K", i: "Informational", kd: 17, p: 4, c: "blue" },
                                    { k: "do seo", v: "26.7K", i: "Navigational", kd: 100, p: 7, c: "green" },
                                    { k: "free content generator", v: "21.3K", i: "Informational", kd: 69, p: 12, c: "blue" },
                                    { k: "daily rank tracking", v: "17.5K", i: "Informational", kd: 31, p: 14, c: "blue" },
                                    { k: "localized keyword research", v: "13.9K", i: "Navigational", kd: 57, p: 17, c: "green" },
                                    { k: "amazon rank tracker", v: "11.1K", i: "Informational", kd: 44, p: 26, c: "blue" },
                                ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium text-white">{row.k}</td>
                                        <td className="p-4 font-mono text-muted-foreground">{row.v}</td>
                                        <td className="p-4">
                                            <div className="flex gap-0.5 h-4 items-end opacity-50">
                                                {[...Array(6)].map((_, j) => (
                                                    <div key={j} className="w-1 bg-primary rounded-t-sm" style={{ height: `${Math.random() * 100}%` }} />
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={cn(
                                                "px-2 py-0.5 rounded text-[10px] uppercase font-medium border",
                                                row.c === "green" ? "border-green-500/20 text-green-400 bg-green-500/10" : "border-blue-500/20 text-blue-400 bg-blue-500/10"
                                            )}>
                                                {row.i}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className={cn("inline-block w-8 text-center py-0.5 rounded text-xs font-medium", row.kd > 60 ? "bg-red-500/10 text-red-400" : row.kd > 40 ? "bg-yellow-500/10 text-yellow-400" : "bg-green-500/10 text-green-400")}>
                                                {row.kd}
                                            </span>
                                        </td>
                                        <td className="p-4 text-white">{row.p}</td>
                                        <td className="p-4 text-muted-foreground text-xs font-mono truncate max-w-[150px] opacity-70 group-hover:opacity-100">
                                            https://example.com/page-{i}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
