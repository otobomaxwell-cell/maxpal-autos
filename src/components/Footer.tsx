import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-ink-mute border-t border-dark-line py-7">
      <div className="mx-auto max-w-[1180px] px-6 flex flex-wrap justify-between gap-2.5 text-[0.8125rem]">
        <span>&copy; {business.name}. Placeholder content for design review.</span>
        <span>{business.postcode}, Derby</span>
      </div>
    </footer>
  );
}
