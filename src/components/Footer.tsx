import Link from "next/link";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-ink-mute border-t border-dark-line py-7">
      <div className="mx-auto max-w-[1180px] px-6 flex flex-wrap justify-between gap-x-6 gap-y-2.5 text-[0.8125rem]">
        <span>
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-dark-ink focus-halo rounded-[3px]">
            Privacy Policy
          </Link>
          <span>{business.postcode}, Derby</span>
        </div>
      </div>
    </footer>
  );
}
