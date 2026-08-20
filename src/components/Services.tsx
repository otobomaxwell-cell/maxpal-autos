import type { ComponentType } from "react";
import { serviceCategories } from "@/lib/business";
import {
  BrakeIcon,
  DropIcon,
  GearIcon,
  ScanIcon,
  SnowIcon,
  SpringIcon,
  TyreIcon,
  VanIcon,
  WaveIcon,
  type IconProps,
} from "./icons";

const iconByCategory: Record<string, ComponentType<IconProps>> = {
  brakes: BrakeIcon,
  suspension: SpringIcon,
  drivetrain: GearIcon,
  servicing: DropIcon,
  tyres: TyreIcon,
  aircon: SnowIcon,
  electronics: WaveIcon,
  diagnostics: ScanIcon,
};

export function Services() {
  return (
    <section id="services" className="bg-surface text-ink py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber-text font-semibold mb-3.5">
          What We Do
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-9">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {serviceCategories.map((category) => {
            const Icon = iconByCategory[category.id];
            return (
              <div key={category.id} className="bg-surface p-6">
                <div className="w-9 h-9 flex items-center justify-center text-amber-deep border-t-[3px] border-amber pt-2 mb-3.5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[1.0625rem] tracking-wide mb-1.5">{category.title}</h3>
                <p className="text-[0.9375rem] text-ink-mute">{category.items.join(" · ")}</p>
              </div>
            );
          })}

          <div className="bg-dark text-dark-ink p-6">
            <div className="w-9 h-9 flex items-center justify-center text-amber border-t-[3px] border-amber pt-2 mb-3.5">
              <VanIcon className="w-6 h-6" />
            </div>
            <h3 className="text-[1.0625rem] tracking-wide mb-1.5 text-dark-ink">Mobile Mechanic</h3>
            <p className="text-[0.9375rem] text-dark-ink-mute">
              Selected repairs at your home, workplace or vehicle location. Call with your registration,
              location and problem to check suitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
