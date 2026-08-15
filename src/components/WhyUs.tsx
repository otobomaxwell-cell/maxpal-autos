import { whyUs } from "@/lib/business";
import { CheckIcon } from "./icons";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-dark text-dark-ink py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber font-semibold mb-3.5">
          Why Customers Choose Us
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-9 max-w-[24ch]">
          Straightforward repairs, straightforward pricing.
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
          {whyUs.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <CheckIcon className="w-[22px] h-[22px] text-amber mt-0.5 flex-none" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
