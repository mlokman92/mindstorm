import { solutions } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** Solution pillars grid — four on-brand offerings for the everyday economy. */
export function SolutionsGrid() {
  return (
    <Section variant="alt" id="solutions">
      <SectionHeading
        eyebrow={solutions.eyebrow}
        title={solutions.title}
        highlight="Everyday Economy"
        lead={solutions.subtitle}
        align="center"
        className="mb-14"
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.items.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 0.08} className="h-full">
            <Card tone="light" className="group flex h-full flex-col">
              <IconTile
                tone="light"
                className="transition-colors duration-200 group-hover:bg-brand group-hover:text-white"
              >
                <Icon name={item.icon} className="h-6 w-6" />
              </IconTile>

              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.detail}
              </p>

              <div className="mt-auto pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  withArrow
                  href="/solutions"
                  className="px-0"
                  aria-label={`Learn more about ${item.title}`}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
