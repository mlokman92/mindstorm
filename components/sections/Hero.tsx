import { Sparkles } from "lucide-react";
import { hero, stats } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Homepage hero — the signature first impression beneath the transparent navbar.
 * Full-bleed dark surface with a blueprint grid, ambient glow orbs and a calm
 * SVG node-network, anchoring the headline, CTAs and KPI band. See DESIGN.md §4/§8.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-20 text-white md:pt-40 md:pb-28">
      {/* Decorative background layers (purely visual). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Faint blueprint grid, radially faded toward the edges. */}
        <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] mask-radial-faded opacity-70" />
        {/* Primary brand glow orb, upper-right. */}
        <div className="absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/25 blur-[120px] animate-pulse-glow" />
        {/* Secondary, cooler glow orb, lower-left. */}
        <div
          className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-brand-700/30 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "2.5s" }}
        />
        {/* Concentric rings + node network, anchored right, drifting calmly. */}
        <NodeNetwork className="absolute right-0 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 translate-x-1/4 text-brand-300 animate-float lg:block" />
        {/* Soft top fade so the navbar blends into the hero. */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy-950 to-transparent" />
      </div>

      <Container className="relative max-w-4xl text-center lg:text-left">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-brand-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {hero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
            {hero.titleLead}{" "}
            <span className="text-gradient-brand">{hero.titleHighlight}</span>{" "}
            {hero.titleTrail}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl lg:mx-0">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button href={hero.primaryCta.href} size="lg" withArrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outlineDark" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        {/* KPI band. */}
        <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={0.32 + i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition-colors duration-200 hover:border-brand/40">
                <Icon name={s.icon} className="h-5 w-5 text-brand-300" />
                <div className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/55">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Decorative concentric rings with connected nodes. Purely ornamental. */
function NodeNetwork({ className }: { className?: string }) {
  const nodes: { cx: number; cy: number; r: number }[] = [
    { cx: 320, cy: 320, r: 6 },
    { cx: 320, cy: 96, r: 5 },
    { cx: 510, cy: 230, r: 4 },
    { cx: 470, cy: 470, r: 5 },
    { cx: 170, cy: 460, r: 4 },
    { cx: 120, cy: 220, r: 5 },
    { cx: 320, cy: 544, r: 4 },
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 640 640"
      className={cn(className)}
      fill="none"
      stroke="currentColor"
    >
      {/* Concentric rings. */}
      {[110, 180, 250, 310].map((r) => (
        <circle
          key={r}
          cx={320}
          cy={320}
          r={r}
          strokeWidth={1}
          className="opacity-20"
        />
      ))}
      {/* Spokes from the centre node to the outer nodes. */}
      {nodes.slice(1).map((n) => (
        <line
          key={`${n.cx}-${n.cy}`}
          x1={320}
          y1={320}
          x2={n.cx}
          y2={n.cy}
          strokeWidth={1}
          className="opacity-15"
        />
      ))}
      {/* Nodes. */}
      {nodes.map((n, i) => (
        <circle
          key={`node-${n.cx}-${n.cy}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="currentColor"
          stroke="none"
          className={i === 0 ? "opacity-90" : "opacity-50"}
        />
      ))}
    </svg>
  );
}
