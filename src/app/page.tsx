import { AppointmentSection } from "@/components/AppointmentSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocationHours } from "@/components/LocationHours";
import { PriorityUrgency } from "@/components/PriorityUrgency";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCallBar } from "@/components/StickyCallBar";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-brand focus:text-brand-ink focus:px-4 focus:py-2.5 focus:rounded-[3px] focus:font-display focus:font-bold focus:uppercase focus:tracking-wide"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <PriorityUrgency />
        <Services />
        <Reviews />
        <AppointmentSection />
        <WhyUs />
        <LocationHours />
        <FinalCta />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
