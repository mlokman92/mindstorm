import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export type PageHeroProps = {
  eyebrow?: string;
  /** Page heading. */
  title: string;
  /** Optional phrase within `title` to color with the brand gradient accent. */
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Optional CTA row rendered beneath the subtitle. */
  children?: React.ReactNode;
};

/** Split `title` so a matching `highlight` phrase is wrapped in a brand gradient span. */
function renderTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, ...rest] = title.split(highlight);
  const after = rest.join(highlight);
  return (
    <>
      {before}
      <span className="text-gradient-brand">{highlight}</span>
      {after}
    </>
  );
}

/**
 * Reusable dark page header for sub-pages (About, Products, Solutions, Roadmap,
 * Contact). Sits beneath the transparent navbar with a blueprint grid, an ambient
 * brand glow orb and a calm, authoritative headline. See DESIGN.md §2/§4.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  children,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 md:pt-40 pb-16 md:pb-24">
      {/* Decorative background layers (purely visual). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Faint blueprint grid, radially faded toward the edges. */}
        <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] mask-radial-faded opacity-70" />
        {/* Ambient brand glow orb, upper-right. */}
        <div className="absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[120px] animate-pulse-glow" />
        {/* Soft top fade so the navbar blends into the hero. */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-950 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div
          className={cn(
            "flex flex-col",
            centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl items-start text-left",
          )}
        >
          {eyebrow && (
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
                {eyebrow}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.06} className={eyebrow ? "mt-4" : undefined}>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl">
              {renderTitle(title, highlight)}
            </h1>
          </Reveal>

          {subtitle && (
            <Reveal delay={0.12}>
              <p
                className={cn(
                  "mt-5 max-w-2xl text-lg text-white/70 md:text-xl",
                  centered && "mx-auto",
                )}
              >
                {subtitle}
              </p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.18}>
              <div
                className={cn(
                  "mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center",
                  centered && "sm:justify-center",
                )}
              >
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
