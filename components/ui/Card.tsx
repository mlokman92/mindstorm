import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type CardProps = {
  children: React.ReactNode;
  tone?: Tone;
  /** Apply hover lift + accent. */
  interactive?: boolean;
  className?: string;
};

/** Base surface honoring the elevation rules in DESIGN.md §4. */
export function Card({ children, tone = "light", interactive = true, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-all duration-200 md:p-8",
        tone === "light"
          ? "border-slate-200 bg-white shadow-card"
          : "border-white/10 bg-navy-800/60 backdrop-blur",
        interactive &&
          (tone === "light"
            ? "hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
            : "hover:-translate-y-1 hover:border-brand/50"),
        className,
      )}
    >
      {children}
    </div>
  );
}

type IconTileProps = {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
};

/** Rounded tile that frames a feature icon. */
export function IconTile({ tone = "light", className, children }: IconTileProps) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
        tone === "light" ? "bg-brand/10 text-brand" : "bg-white/5 text-brand-300 ring-1 ring-inset ring-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
