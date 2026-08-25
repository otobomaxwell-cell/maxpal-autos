import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { PhoneIcon } from "./icons";
import { CtaLink } from "./ui/Cta";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-line">
      <div className="mx-auto max-w-295 px-6 flex items-center justify-between gap-4 py-3">
        <Link
          href="/"
          aria-label={`${business.name} - Home`}
          className="flex items-center gap-3 text-ink min-w-0 focus-halo rounded-[3px]"
        >
          <Image
            src="/assets/maxpal-wordmark.png"
            alt=""
            width={1301}
            height={128}
            className="h-3 w-auto flex-none sm:h-5"
            priority
          />
        </Link>

        <div className="hidden sm:flex items-center gap-5 flex-none">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-[0.9375rem] font-semibold text-ink-mute hover:text-brand-text whitespace-nowrap focus-halo rounded-[3px]"
          >
            <PhoneIcon className="size-4.5 text-brand-deep" />
            {business.phoneDisplay}
          </a>
          <CtaLink href="/#appointment" size="sm">
            Book Now
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
