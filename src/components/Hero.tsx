import { business } from "@/lib/business";
import { PhoneIcon, PinIcon, TargetIcon, WrenchIcon } from "./icons";
import { CtaLink } from "./ui/Cta";

const chips = [
  { icon: PinIcon, label: `Based in Derby - ${business.postcode}` },
  {
    icon: TargetIcon,
    label: `Serving customers within approx. ${business.serviceRadiusMiles} miles`,
  },
  { icon: WrenchIcon, label: "Workshop & selected mobile repairs" },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-dark text-dark-ink pt-16 pb-14 sm:pt-24 sm:pb-20"
      style={{
        backgroundImage:
          "repeating-linear-gradient(120deg, rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 2px, transparent 2px, transparent 34px)",
      }}
    >
      <div className="mx-auto max-w-295 px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-brand font-semibold mb-3.5">
          {business.tagline} &middot; Workshop &amp; Mobile Service &middot; Derby
        </p>
        <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] max-w-[16ch]">
          Need Your Car Repaired Quickly?
        </h1>
        <p className="mt-4.5 text-xl text-dark-ink-mute max-w-[40ch]">
          Priority appointments available when you can&apos;t wait days for a repair.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-dark-2 border border-dark-line flex items-center justify-center text-brand">
              <PhoneIcon className="w-[18px] h-[18px]" />
            </span>
            <a
              href={business.phoneHref}
              className="font-mono text-2xl sm:text-[1.75rem] font-semibold hover:text-brand focus-halo rounded-[3px]"
            >
              {business.phoneDisplay}
            </a>
          </div>
          <CtaLink href="#appointment">Check Availability</CtaLink>
        </div>

        <div className="mt-12 flex flex-wrap gap-3.5">
          {chips.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2.5 bg-dark-2 border border-dark-line text-dark-ink-mute text-sm px-3.5 py-2 rounded-full"
            >
              <Icon className="w-[18px] h-[18px] text-brand" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
