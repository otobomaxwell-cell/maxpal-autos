import { business } from "@/lib/business";
import { PhoneIcon } from "./icons";

export function StickyCallBar() {
  return (
    <a
      href={business.phoneHref}
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand text-brand-ink border-t-2 border-brand-deep flex items-center justify-center gap-2.5 py-3.5 px-5 font-display font-bold uppercase tracking-wide focus-halo"
    >
      <PhoneIcon className="size-4.5" />
      Call Now - {business.phoneDisplay}
    </a>
  );
}
