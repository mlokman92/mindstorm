"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

/** Global site navigation. Fixed over the dark hero; turns translucent-white on scroll. */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Track scroll to flip the bar between transparent (top) and glass-white (scrolled).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between md:h-20"
        >
          <Logo tone={scrolled ? "light" : "dark"} height={30} priority />

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md",
                      active
                        ? "font-medium text-brand"
                        : scrolled
                          ? "text-slate-600 hover:text-ink"
                          : "text-white/75 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              href={nav.cta.href}
              size="sm"
              withArrow
              variant={scrolled ? "primary" : "outlineDark"}
            >
              {nav.cta.label}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:hidden",
              scrolled ? "text-ink hover:bg-slate-100" : "text-white hover:bg-white/10",
            )}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile panel — always dark-on-white regardless of scroll state */}
      <div
        id="mobile-nav-panel"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="rounded-b-2xl border-b border-slate-200 bg-white shadow-xl">
          <Container>
            <ul className="py-2">
              {nav.links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className="border-b border-slate-100">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block py-3 text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md",
                        active ? "font-medium text-brand" : "text-slate-700 hover:text-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="py-4">
              <Button
                href={nav.cta.href}
                variant="primary"
                withArrow
                onClick={() => setOpen(false)}
                className="w-full"
              >
                {nav.cta.label}
              </Button>
            </div>
          </Container>
        </div>
      </div>

      {/* Accessible site name for screen readers / SEO landmark context */}
      <span className="sr-only">{site.name} primary navigation</span>
    </header>
  );
}
