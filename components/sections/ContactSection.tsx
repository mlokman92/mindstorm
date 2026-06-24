"use client";

import { useState } from "react";
import { Mail, MapPin, Globe, Building2, Check, ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type ContactInfo = {
  label: string;
  value: string;
  href?: string;
  icon: typeof Mail;
};

const infoRows: ContactInfo[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "Headquarters",
    value: site.hq,
    icon: Building2,
  },
  {
    label: "Website",
    value: site.web,
    href: `https://${site.web}`,
    icon: Globe,
  },
];

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-brand focus:ring-2 focus:ring-brand/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section variant="light" id="contact">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Let's build the everyday economy together."
        highlight="everyday economy"
        lead="Tell us about your organization or partnership and our team will get back to you."
        className="mb-12"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — contact info */}
        <div className="space-y-4">
          {infoRows.map((row) => {
            const RowIcon = row.icon;
            const content = (
              <>
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand"
                >
                  <RowIcon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-slate-500">
                    {row.label}
                  </span>
                  <span className="block break-words font-display text-base font-semibold text-ink">
                    {row.value}
                  </span>
                </span>
              </>
            );

            return row.href ? (
              <a
                key={row.label}
                href={row.href}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {content}
              </a>
            ) : (
              <div
                key={row.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
              >
                {content}
              </div>
            );
          })}

          {/* Reassurance line */}
          <p className="flex items-start gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
            <span>
              We adhere to the highest standards of security, compliance and data
              privacy. Your details stay confidential and are never shared with
              third parties.
            </span>
          </p>

          {/* Brand attribute chips */}
          <ul className="flex flex-wrap gap-2 pt-1" aria-label="Brand attributes">
            {site.attributes.map((attribute) => (
              <li
                key={attribute}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
              >
                {attribute}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — contact form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:p-8">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span
                aria-hidden
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-glow"
              >
                <Check className="h-8 w-8" strokeWidth={2.25} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                Thanks — we&apos;ll be in touch.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
                Your message has reached the {site.name} team. We typically respond
                within two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClasses}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@organization.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-org" className={labelClasses}>
                  Organization
                </label>
                <input
                  id="contact-org"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Company, agency or institution"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your organization or partnership opportunity."
                  className={cn(inputClasses, "resize-y")}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3 text-base font-medium text-white shadow-[0_8px_24px_-8px_rgba(75,75,255,0.6)] transition-all duration-200 hover:bg-brand-600 hover:shadow-[0_10px_30px_-8px_rgba(75,75,255,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Send message
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to be contacted by {site.name}.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
