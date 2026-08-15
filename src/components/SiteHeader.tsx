import { business } from "@/lib/business";
import { PhoneIcon } from "./icons";
import { CtaLink } from "./ui/Cta";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-dark-2 border-b border-dark-line">
      <div className="mx-auto max-w-[1180px] px-6 flex items-center justify-between gap-4 py-3">
        <a href="#" aria-label={`${business.name} – back to top`} className="flex items-center gap-3 text-dark-ink min-w-0">
          <svg className="w-9 h-9 flex-none" viewBox="0 0 40 40" aria-hidden="true">
            <polygon
              points="35.71,26.51 26.51,35.71 13.49,35.71 4.29,26.51 4.29,13.49 13.49,4.29 26.51,4.29 35.71,13.49"
              fill="#202226"
              stroke="#f2a31e"
              strokeWidth="2"
            />
            <text
              x="20"
              y="25"
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontWeight="700"
              fontSize="14"
              letterSpacing="0.5"
              fill="#f2a31e"
            >
              MA
            </text>
          </svg>
          <span className="font-display font-bold uppercase text-[0.9375rem] leading-tight tracking-wide">
            Maxpal
            <br />
            Autos
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-5 flex-none">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-[0.9375rem] font-semibold text-dark-ink-mute hover:text-amber whitespace-nowrap"
          >
            <PhoneIcon className="w-[18px] h-[18px] text-amber" />
            {business.phoneDisplay}
          </a>
          <CtaLink href="#appointment" size="sm">
            Call Now
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
