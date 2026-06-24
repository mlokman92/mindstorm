import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Variant = "light" | "alt" | "dark" | "darker";

const variantClasses: Record<Variant, string> = {
  light: "bg-white text-slate-700",
  alt: "bg-slate-50 text-slate-700",
  dark: "bg-navy-900 text-white",
  darker: "bg-navy-950 text-white",
};

type SectionProps = {
  children: React.ReactNode;
  /** Background surface. */
  variant?: Variant;
  /** Render a subtle blueprint grid texture (dark variants). */
  grid?: boolean;
  /** Render an ambient brand glow orb. */
  glow?: boolean;
  /** Large vertical rhythm (hero/feature). */
  size?: "default" | "lg";
  /** Wrap children in a Container. Set false for full-bleed content. */
  container?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
};

/**
 * Page section with background variant, vertical rhythm and optional decorative
 * grid/glow. See DESIGN.md §3–4.
 */
export function Section({
  children,
  variant = "light",
  grid = false,
  glow = false,
  size = "default",
  container = true,
  className,
  containerClassName,
  id,
}: SectionProps) {
  const isDark = variant === "dark" || variant === "darker";
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        size === "lg" ? "py-24 md:py-36" : "py-20 md:py-28",
        variantClasses[variant],
        className,
      )}
    >
      {grid && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-[size:48px_48px]",
            isDark ? "bg-grid-dark opacity-100" : "bg-grid-light opacity-60",
          )}
        />
      )}
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[480px] w-[680px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px] animate-pulse-glow"
        />
      )}
      <div className="relative z-10">
        {container ? (
          <Container className={containerClassName}>{children}</Container>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
