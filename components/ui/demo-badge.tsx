import { cn } from "@/lib/utils";

type DemoBadgeProps = {
    label?: string;
    className?: string;
};

export function DemoBadge({ label = "DEMO", className }: DemoBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-white/92 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700 backdrop-blur-sm",
                className,
            )}
        >
            <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {label}
        </span>
    );
}
