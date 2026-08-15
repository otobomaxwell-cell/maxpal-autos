import { business } from "@/lib/business";
import { AppointmentForm } from "./AppointmentForm";
import { CtaLink } from "./ui/Cta";

export function AppointmentSection() {
  return (
    <section id="appointment" className="bg-surface text-ink py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber-deep font-semibold mb-3.5">
          Need a Mechanic?
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-5">
          Tell Us What Your Vehicle Needs
        </h2>
        <p className="text-lg text-ink-mute max-w-[62ch] mb-9">
          For the quickest response, call us and have your vehicle registration ready.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,1fr)_minmax(320px,1.4fr)] gap-px bg-line border border-line">
          <div className="bg-dark text-dark-ink p-8 sm:p-10 flex flex-col justify-center">
            <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber font-semibold mb-3.5">
              Call Direct
            </p>
            <a href={business.phoneHref} className="font-mono text-3xl font-semibold mb-3.5 hover:text-amber">
              {business.phoneDisplay}
            </a>
            <p className="text-dark-ink-mute mb-7">Have your vehicle registration ready when you call.</p>
            <CtaLink href={business.phoneHref}>Call Now</CtaLink>
          </div>

          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
