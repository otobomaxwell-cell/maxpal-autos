"use client";

import { useState, type FormEvent } from "react";
import { serviceTypeOptions, urgencyOptions } from "@/lib/business";
import { CtaButton } from "./ui/Cta";

type SubmissionState =
  | { readonly status: "idle" }
  | { readonly status: "submitting" }
  | { readonly status: "success" }
  | { readonly status: "error"; readonly message: string };

const fieldClasses =
  "w-full text-base px-3.5 py-3 border border-line rounded-[3px] bg-surface-2 text-ink focus:outline-none focus:border-amber-deep focus:ring-3 focus:ring-amber/25";

const labelClasses = "block text-[0.8125rem] font-semibold uppercase tracking-wide text-ink-mute mb-2";

export function AppointmentForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: "submitting" });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmission({ status: "success" });
      event.currentTarget.reset();
    } catch {
      setSubmission({
        status: "error",
        message: "Something went wrong sending your request. Please call us instead.",
      });
    }
  }

  if (submission.status === "success") {
    return (
      <div className="bg-surface p-8 sm:p-10 flex flex-col items-center text-center justify-center h-full">
        <h3 className="text-xl tracking-wide mb-2.5">Request sent</h3>
        <p className="text-ink-mute max-w-[42ch]">
          We&apos;ll contact you shortly to confirm availability and pricing. For the quickest
          response, feel free to call us directly.
        </p>
      </div>
    );
  }

  return (
    <form className="bg-surface p-8 sm:p-10" onSubmit={handleSubmit}>
      <h3 className="text-xl tracking-wide mb-6">Or Request an Appointment</h3>

      <div className="mb-5">
        <label htmlFor="name" className={labelClasses}>
          Your name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required className={fieldClasses} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 mb-5">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="registration" className={labelClasses}>
            Vehicle registration
          </label>
          <input id="registration" name="registration" type="text" className={fieldClasses} />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="postcode" className={labelClasses}>
          Your postcode
        </label>
        <input id="postcode" name="postcode" type="text" autoComplete="postal-code" className={fieldClasses} />
      </div>

      <div className="mb-5">
        <label htmlFor="need" className={labelClasses}>
          What does your vehicle need?
        </label>
        <textarea id="need" name="need" rows={3} className={`${fieldClasses} resize-y`} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 mb-6">
        <fieldset>
          <legend className={labelClasses}>How soon do you need it repaired?</legend>
          <div className="flex flex-col gap-2">
            {urgencyOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2.5 text-[0.9375rem]">
                <input type="radio" name="urgency" value={option.value} className="w-[17px] h-[17px] accent-amber-deep" />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className={labelClasses}>Service type</legend>
          <div className="flex flex-col gap-2">
            {serviceTypeOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2.5 text-[0.9375rem]">
                <input type="radio" name="serviceType" value={option.value} className="w-[17px] h-[17px] accent-amber-deep" />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <CtaButton type="submit" block disabled={submission.status === "submitting"}>
        {submission.status === "submitting" ? "Sending…" : "Request an Appointment"}
      </CtaButton>

      {submission.status === "error" && (
        <p className="mt-3 text-sm text-red font-semibold">{submission.message}</p>
      )}

      <p className="mt-4.5 text-[0.8125rem] text-ink-mute italic">
        Submitting a request does not guarantee an appointment. We will contact you to confirm
        availability and pricing.
      </p>
    </form>
  );
}
