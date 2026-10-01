import { business, contactLinks } from "@/data/business";
import { Container } from "@/components/ui/container";
export function SiteFooter() {
  return (
    <footer className="border-t border-white/20 bg-foreground py-10 text-background">
      <Container className="grid gap-8 text-sm md:grid-cols-2">
        <div>
          <p className="max-w-64 font-semibold tracking-wide">
            {business.name}
          </p>
          <p className="mt-4 text-background/70">ABN {business.abn}</p>
        </div>
        <div className="md:text-right">
          <a
            className="inline-flex min-h-11 items-center"
            href={contactLinks.phone}
          >
            {business.phone}
          </a>
          <p className="text-background/70">{business.address}</p>
        </div>
      </Container>
    </footer>
  );
}
