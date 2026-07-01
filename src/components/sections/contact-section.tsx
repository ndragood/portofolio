import { ContactInfo } from "@/components/sections/contact-info";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-secondary">
          Get in touch
        </p>
        <h2
          id="contact-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Let&apos;s Connect
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Open to internships, CTF teams, and security-focused collaborations.
          Send a message and I&apos;ll get back to you.
        </p>

        <div className="mt-12 w-full">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
