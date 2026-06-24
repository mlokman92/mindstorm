import { TrendingUp } from "lucide-react";
import { marketStats } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Slide 3 — Malaysia's massively funded digital transformation, told through KPIs. */
export function MarketStats() {
  return (
    <Section variant="dark" grid glow>
      <SectionHeading
        tone="dark"
        eyebrow={marketStats.eyebrow}
        title={marketStats.title}
        highlight="Massively Funded"
        align="left"
        className="mb-14"
      />

      <ul className="grid gap-6 sm:grid-cols-2">
        {marketStats.stats.map((stat, index) => (
          <Reveal
            key={stat.value}
            as="li"
            delay={index * 0.08}
            className={cn(
              "group rounded-2xl border border-white/10 bg-navy-800/60 p-8 backdrop-blur",
              "transition-colors duration-300 hover:border-brand/40",
            )}
          >
            <p className="font-display text-5xl font-bold tracking-tight text-gradient-brand md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 leading-relaxed text-white/65">{stat.detail}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.24} className="mt-8">
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
          <TrendingUp
            aria-hidden
            className="mt-0.5 h-5 w-5 shrink-0 text-brand-300"
            strokeWidth={2}
          />
          <p className="text-white/75">{marketStats.footnote}</p>
        </div>
      </Reveal>
    </Section>
  );
}
