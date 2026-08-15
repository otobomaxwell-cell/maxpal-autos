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
      <SiteHeader />
      <main>
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
