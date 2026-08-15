import { priorityIdealFor } from "@/lib/business";
import { TriangleIcon } from "./icons";
import { CtaLink } from "./ui/Cta";

export function PriorityUrgency() {
  return (
    <section id="priority" className="bg-bg text-ink pt-14 pb-0 sm:pt-24">
      <div className="mx-auto max-w-[1180px] px-6 pb-14 sm:pb-16 border-t-4 border-amber">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber-deep font-semibold mt-8 mb-3.5">
          Priority Mechanic Service in Derby
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-5 max-w-[20ch]">
          Need Your Car Repaired Quickly?
        </h2>
        <p className="text-lg text-ink-mute max-w-[62ch]">
          We provide professional workshop and selected mobile mechanic services for Derby and the
          surrounding areas. Priority appointments are available for urgent problems, often with
          same-day or next-available scheduling.
        </p>
      </div>

      <div className="h-3 bg-[repeating-linear-gradient(135deg,#1b1300_0_16px,#f2a31e_16px_32px)]" />

      <div className="bg-amber text-amber-ink py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <h3 className="text-xl tracking-wide mb-6">Ideal for:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {priorityIdealFor.map((item) => (
              <li key={item} className="flex items-start gap-3 font-semibold">
                <TriangleIcon className="w-[18px] h-[18px] mt-0.5 flex-none" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[0.9375rem] font-semibold">
            Priority appointments carry an additional priority charge.
          </p>

          <div className="mt-8">
            <CtaLink href="#appointment" variant="dark">
              Call to Check Today&apos;s Availability
            </CtaLink>
          </div>
        </div>
      </div>

      <div className="h-3 bg-[repeating-linear-gradient(135deg,#1b1300_0_16px,#f2a31e_16px_32px)]" />
    </section>
  );
}
