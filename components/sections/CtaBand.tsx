import { ctaBand } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ACCENT = "everyday economy";

/** Splits the CTA title so a single key phrase can carry the brand gradient accent. */
function renderTitle(title: string) {
  const index = title.toLowerCase().indexOf(ACCENT);
  if (index === -1) {
    return title;
  }
  const before = title.slice(0, index);
  const phrase = title.slice(index, index + ACCENT.length);
  const after = title.slice(index + ACCENT.length);
  return (
    <>
      {before}
      <span className="text-gradient-brand">{phrase}</span>
      {after}
    </>
  );
}

/**
 * Shared closing CTA band, reused at the bottom of every page.
 * Full-width navy band with a centered brand glow and faint blueprint grid.
 */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Centered brand glow orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[120px] animate-pulse-glow"
      />
      {/* Faint blueprint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark mask-radial-faded opacity-[0.5]"
      />
      {/* Top hairline highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <Container className="relative py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
              {ctaBand.eyebrow}
            </span>

            <h2
              className={cn(
                "mt-5 font-display text-3xl font-bold tracking-tight text-white",
                "md:text-5xl"
              )}
            >
              {renderTitle(ctaBand.title)}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {ctaBand.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={ctaBand.primary.href} variant="primary" size="lg" withArrow>
                {ctaBand.primary.label}
              </Button>
              <Button href={ctaBand.secondary.href} variant="outlineDark" size="lg">
                {ctaBand.secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
