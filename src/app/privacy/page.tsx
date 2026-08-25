import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCallBar } from "@/components/StickyCallBar";
import { business } from "@/lib/business";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

const sectionHeadingClasses = "text-xl mb-3 mt-10 first:mt-0";
const paragraphClasses = "mb-4 leading-[1.7] text-ink-mute";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bg text-ink py-14 sm:py-20">
        <div className="mx-auto max-w-190 px-6">
          <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-brand-text font-semibold mb-3.5">
            Legal
          </p>
          <h1 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-9">
            Privacy Policy
          </h1>

          <p className={paragraphClasses}>
            This policy explains what personal information {business.name} collects through this
            website, why we collect it, and how we look after it.
          </p>

          <h2 className={sectionHeadingClasses}>Who we are</h2>
          <p className={paragraphClasses}>
            {business.name}, {business.addressLines.join(", ")}. You can contact us at{" "}
            <a
              href={`mailto:${business.notificationEmail}`}
              className="underline hover:text-brand-text"
            >
              {business.notificationEmail}
            </a>{" "}
            or{" "}
            <a href={business.phoneHref} className="underline hover:text-brand-text">
              {business.phoneDisplay}
            </a>
            .
          </p>

          <h2 className={sectionHeadingClasses}>What we collect</h2>
          <p className={paragraphClasses}>
            When you submit an appointment request through this website, we collect: your name,
            email address, and phone number (required), and, where provided, your vehicle
            registration, postcode, a description of the work needed, your preferred urgency, and
            service type. We do not use cookies or any advertising or analytics tracking on this
            website. The appointment form uses Cloudflare Turnstile solely to check you&apos;re not
            a bot before we accept a submission; it does not track you or use your data for
            advertising.
          </p>

          <h2 className={sectionHeadingClasses}>Why we collect it</h2>
          <p className={paragraphClasses}>
            We use this information solely to respond to your enquiry, discuss availability and
            pricing, and arrange and carry out any resulting repair or servicing work.
          </p>

          <h2 className={sectionHeadingClasses}>Our legal basis</h2>
          <p className={paragraphClasses}>
            We process your details on the basis of legitimate interests — responding to an enquiry
            you have chosen to send us — and, where an appointment goes ahead, to take steps toward
            and perform a contract for repair or servicing work.
          </p>

          <h2 className={sectionHeadingClasses}>Who we share it with</h2>
          <p className={paragraphClasses}>
            Appointment requests are delivered to our business inbox by email using Resend, a
            third-party email delivery provider based in the United States. The form also uses
            Cloudflare Turnstile to check submissions aren&apos;t from bots. We do not sell your
            information, and we do not share it with any other third party or use it for marketing
            without your separate consent.
          </p>

          <h2 className={sectionHeadingClasses}>How long we keep it</h2>
          <p className={paragraphClasses}>
            We keep enquiry details for as long as reasonably necessary to respond to your request,
            complete any resulting work, and meet our own record-keeping obligations, and we delete
            them when they are no longer needed for those purposes.
          </p>

          <h2 className={sectionHeadingClasses}>Your rights</h2>
          <p className={paragraphClasses}>
            Under UK data protection law, you have the right to ask us what information we hold
            about you, to have it corrected or deleted, and to object to or restrict how we use it.
            To exercise any of these rights, contact us using the details above. You also have the
            right to complain to the{" "}
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-text"
            >
              Information Commissioner&apos;s Office
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </p>

          <h2 className={sectionHeadingClasses}>Changes to this policy</h2>
          <p className={paragraphClasses}>
            We may update this policy from time to time. The current version is always available at
            this page.
          </p>

          <p className="mt-10">
            <Link href="/" className="underline hover:text-brand-text">
              &larr; Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
