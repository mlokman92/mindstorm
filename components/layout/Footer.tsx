import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";
import { footer, site } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

/** Site footer. Dark navy surface with brand column, link columns, and legal bar. DESIGN.md §5. */
export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white">
      {/* Top edge gradient accent line */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      />

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo tone="dark" height={32} href="/" />
            <p className="mt-5 max-w-sm leading-relaxed text-white/55">
              {footer.blurb}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                <a
                  href={`mailto:${site.email}`}
                  className="rounded text-white/70 transition-colors hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                <span className="text-white/70">{site.hq}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                <span className="text-white/70">{site.web}</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
          >
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-white/40">
                  {column.title}
                </h2>
                <ul className="mt-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded py-1 text-sm text-white/65 transition-colors hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/45">
              &copy; {site.year} {site.legalName}. Confidential &amp; Proprietary.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {site.attributes.map((attribute) => (
                <li
                  key={attribute}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55"
                >
                  {attribute}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
