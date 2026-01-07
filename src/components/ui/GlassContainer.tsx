import { cn } from "@/lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function GlassContainer({ children, className, ...props }: GlassContainerProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
