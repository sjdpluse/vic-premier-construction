import { business, contactLinks } from "@/data/business";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
export function CTASection() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-foreground text-background"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        <div>
          <SectionHeading id="contact-heading" eyebrow="Let’s talk">
            A place to start.
            <br />
            Your next project.
          </SectionHeading>
          <ButtonLink href={contactLinks.quote}>Get a Free Quote</ButtonLink>
          <p className="mt-4 text-sm text-background/70">
            Send your enquiry by email, or call to discuss your project.
          </p>
        </div>
        <address className="flex flex-col justify-end gap-7 not-italic">
          <div>
            <p className="eyebrow mb-2 text-background/70">Call</p>
            <a
              className="inline-flex min-h-11 text-3xl"
              href={contactLinks.phone}
            >
              {business.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2 text-background/70">Email</p>
            <a
              className="inline-flex min-h-11 max-w-full items-center break-all underline underline-offset-4"
              href={contactLinks.email}
            >
              {business.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3 text-background/70">Find us</p>
            <p>{business.address}</p>
          </div>
        </address>
      </div>
    </Section>
  );
}
