import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { platforms, platformsSection } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Split a trailing "+" so it can be accented in brand. */
function renderName(name: string) {
  if (name.endsWith("+")) {
    return (
      <>
        {name.slice(0, -1)}
        <span className="text-brand-300">+</span>
      </>
    );
  }
  return name;
}

/**
 * Slides 5–6 — the four flagship "+" platforms as a premium 2×2 dark grid.
 * Signature dark feature moment. See DESIGN.md §8 (platform quadrant).
 */
export function PlatformsShowcase() {
  return (
    <Section variant="darker" grid glow id="platforms">
      <SectionHeading
        tone="dark"
        eyebrow={platformsSection.eyebrow}
        title={platformsSection.title}
        highlight="Everyday Platforms"
        lead={platformsSection.subtitle}
        align="center"
        className="mb-14"
      />

      <div className="relative">
        {/* Subtle 2×2 quadrant axis hints (desktop only, decorative). */}
        <span
          aria-hidden
          className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.22em] text-white/30 lg:inline-block"
        >
          Economic Impact
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.22em] text-white/30 lg:inline-block"
        >
          Frequency of Use
        </span>

        <ul className="grid gap-6 sm:grid-cols-2">
          {platforms.map((platform, index) => (
            <Reveal as="li" key={platform.slug} delay={index * 0.08}>
              <article
                id={platform.slug}
                className={cn(
                  "group relative h-full overflow-hidden rounded-3xl border border-white/10",
                  "bg-navy-800/50 p-8 backdrop-blur transition-all duration-300",
                  "hover:-translate-y-1 hover:border-brand/50",
                )}
              >
                {/* Hover glow — brand radial that brightens on hover. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Inner top highlight. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <IconTile tone="dark">
                      <Icon name={platform.icon} className="h-6 w-6" />
                    </IconTile>
                    <Badge tone="dark">{platform.frequency}</Badge>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {renderName(platform.name)}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-300">
                    {platform.tagline}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                    {platform.domain}
                  </p>

                  <p className="mt-4 leading-relaxed text-white/70">
                    {platform.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {platform.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/products#${platform.slug}`}
                    className="group/link mt-7 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-white/70 transition-colors duration-200 hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                  >
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
