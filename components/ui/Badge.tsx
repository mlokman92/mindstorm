import { cn } from "@/lib/utils";

type Tone = "brand" | "light" | "dark" | "outline";

const tones: Record<Tone, string> = {
  brand: "bg-brand/10 text-brand ring-1 ring-inset ring-brand/20",
  light: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
  dark: "bg-white/10 text-white ring-1 ring-inset ring-white/15",
  outline: "bg-transparent text-slate-500 ring-1 ring-inset ring-slate-200",
};

type BadgeProps = {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
};

/** Small rounded pill / chip. */
export function Badge({ children, tone = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
