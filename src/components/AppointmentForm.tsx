"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitAppointment, type AppointmentActionState } from "@/lib/appointment-action";
import { serviceTypeOptions, urgencyOptions } from "@/lib/business";
import { CtaButton } from "./ui/Cta";

const initialState: AppointmentActionState = { status: "idle" };

const fieldClasses = "w-full text-base px-3.5 py-3 border border-line rounded-[3px] bg-surface-2 text-ink focus-halo";

const labelClasses = "block text-[0.8125rem] font-semibold uppercase tracking-wide text-ink-mute mb-2";

const requiredMark = (
  <span aria-hidden="true" className="text-red">
    {" "}
    *
  </span>
);

export function AppointmentForm() {
  const [state, formAction, isPending] = useActionState(submitAppointment, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      successHeadingRef.current?.focus();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="bg-surface p-8 sm:p-10 flex flex-col items-center text-center justify-center h-full"
      >
        <h3 ref={successHeadingRef} tabIndex={-1} className="text-xl tracking-wide mb-2.5 focus:outline-none">
          Request sent
        </h3>
        <p className="text-ink-mute max-w-[42ch]">
          We&apos;ll contact you shortly to confirm availability and pricing. For the quickest
          response, feel free to call us directly.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} className="bg-surface p-8 sm:p-10" action={formAction}>
      <h3 className="text-xl tracking-wide mb-1">Or Request an Appointment</h3>
      <p className="text-[0.8125rem] text-ink-mute mb-6">
        Fields marked
        {requiredMark} are required.
      </p>

      <div className="mb-5">
        <label htmlFor="name" className={labelClasses}>
          Your name
          {requiredMark}
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required className={fieldClasses} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 mb-5">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email address
            {requiredMark}
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone number
            {requiredMark}
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 mb-5">
        <div>
          <label htmlFor="registration" className={labelClasses}>
            Vehicle registration
          </label>
          <input id="registration" name="registration" type="text" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="postcode" className={labelClasses}>
            Your postcode
          </label>
          <input id="postcode" name="postcode" type="text" autoComplete="postal-code" className={fieldClasses} />
        </div>
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
                <input type="radio" name="urgency" value={option.value} className="size-6 accent-amber-deep" />
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
                <input type="radio" name="serviceType" value={option.value} className="size-6 accent-amber-deep" />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <CtaButton type="submit" block ariaDisabled={isPending}>
        {isPending ? "Sending…" : "Request an Appointment"}
      </CtaButton>

      {state.status === "error" && (
        <p role="alert" className="mt-3 text-sm text-red font-semibold">
          {state.message}
        </p>
      )}

      <p className="mt-4.5 text-[0.8125rem] text-ink-mute italic">
        Submitting a request does not guarantee an appointment. We will contact you to confirm
        availability and pricing.
      </p>
    </form>
  );
}
