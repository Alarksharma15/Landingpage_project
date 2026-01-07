import Link from "next/link";
import { Zap } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/50 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/20">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-display font-bold text-xl text-white tracking-wide">Lumina</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link href="#blog" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Blog
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden md:block text-sm font-medium text-white hover:text-primary transition-colors">
                        Sign In
                    </Link>
                    <GradientButton>Try Demo</GradientButton>
                </div>
            </div>
        </nav>
    );
}
