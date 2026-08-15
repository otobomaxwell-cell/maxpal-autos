import { business } from "@/lib/business";
import { PhoneIcon } from "./icons";
import { CtaLink } from "./ui/Cta";

export function FinalCta() {
  return (
    <section id="final-cta" className="bg-dark text-dark-ink py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber font-semibold mb-3.5">
          Ready to Get Your Car Sorted?
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-5 max-w-[22ch]">
          Don&apos;t wait days if you need your vehicle repaired quickly.
        </h2>
        <p className="text-lg text-dark-ink-mute max-w-[62ch] mb-9">
          Call now, tell us your vehicle registration, location and what is wrong with the vehicle,
          and we&apos;ll tell you the earliest available appointment.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-dark-2 border border-dark-line flex items-center justify-center text-amber">
              <PhoneIcon className="w-[18px] h-[18px]" />
            </span>
            <a href={business.phoneHref} className="font-mono text-2xl font-semibold hover:text-amber">
              {business.phoneDisplay}
            </a>
          </div>
          <CtaLink href="#appointment">Call Now – Check Availability</CtaLink>
        </div>

        <p className="mt-14 pt-6 border-t border-dark-line font-mono text-[0.8125rem] tracking-[0.1em] uppercase text-dark-ink-mute">
          Workshop &amp; Mobile Mechanic &middot; Derby &middot; {business.postcode}
        </p>
      </div>
    </section>
  );
}
