import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroller } from "@/components/utils/SmoothScroller";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Lumina SEO - Advanced Analytics",
  description: "High-performance SEO analytics tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans text-foreground selection:bg-primary/30",
        inter.variable,
        jetbrainsMono.variable,
        outfit.variable
      )}>
        <SmoothScroller />
        {children}
      </body>
    </html>
  );
}
