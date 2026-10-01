import { business, contactLinks } from "@/data/business";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pt-32"
      >
        <Container>
          <p className="eyebrow mb-8 text-muted">
            {business.market} · Construction & renovation
          </p>
          <h1
            id="hero-heading"
            className="max-w-5xl text-[clamp(3rem,7.6vw,7.5rem)] leading-[0.98] font-medium tracking-[-0.055em]"
          >
            New spaces.
            <br />
            <span className="text-muted">Fresh possibilities.</span>
          </h1>
          <div className="mt-12 grid gap-9 border-t border-border pt-8 md:grid-cols-2 lg:mt-16">
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              Residential and commercial construction, renovation and property
              improvements across {business.market}.
            </p>
            <div className="flex flex-wrap items-start gap-4 md:justify-end">
              <ButtonLink href={contactLinks.quote}>
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      {/* Phase 2: compose approved local project photography here with next/image. */}
      <Section
        id="services"
        aria-labelledby="services-heading"
        className="border-t border-border bg-surface"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading id="services-heading" eyebrow="Our services">
            From construction
            <br />
            to the finishing details.
          </SectionHeading>
          <ul className="border-t border-border">
            {services.map((service, index) => (
              <li
                key={service.slug}
                className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-6"
              >
                <span aria-hidden="true" className="pt-1 text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl leading-snug tracking-tight sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      {/* Phase 2: verified project, positioning and process sections follow content approval. */}
      <CTASection />
    </>
  );
}
