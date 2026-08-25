"use server";

import { Resend } from "resend";
import { z } from "zod";
import { business, serviceTypeOptions, urgencyOptions } from "@/lib/business";
import { verifyTurnstileToken } from "@/lib/turnstile";

const urgencyValues = urgencyOptions.map((option) => option.value) as [string, ...string[]];
const serviceTypeValues = serviceTypeOptions.map((option) => option.value) as [string, ...string[]];

const appointmentSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(200),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .max(320)
    .pipe(z.email("Enter a valid email address.")),
  phone: z.string().trim().min(1, "Phone number is required.").max(40),
  registration: z.string().trim().max(20).optional(),
  postcode: z.string().trim().max(20).optional(),
  need: z.string().trim().max(2000).optional(),
  urgency: z.enum(urgencyValues).optional(),
  serviceType: z.enum(serviceTypeValues).optional(),
  "cf-turnstile-response": z.string().min(1, "Verification failed. Please try again."),
});

export type AppointmentActionState =
  | { readonly status: "idle" }
  | { readonly status: "success" }
  | { readonly status: "error"; readonly message: string };

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

// "Server Actions are POST endpoints reachable by anyone who can send the same request, not just through this form.
export async function submitAppointment(
  _prevState: AppointmentActionState,
  formData: FormData,
): Promise<AppointmentActionState> {
  const parsed = appointmentSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid request.";
    return { status: "error", message };
  }

  const {
    name,
    email,
    phone,
    registration,
    postcode,
    need,
    urgency,
    serviceType,
    "cf-turnstile-response": turnstileToken,
  } = parsed.data;

  const isHuman = await verifyTurnstileToken(turnstileToken);
  if (!isHuman) {
    return { status: "error", message: "Verification failed. Please try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return { status: "error", message: "Server not configured. Please call us instead." };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from: `${business.name} Website <${fromEmail}>`,
    to: business.notificationEmail,
    subject: `New appointment request – ${singleLine(name)}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Vehicle registration: ${registration || "—"}`,
      `Postcode: ${postcode || "—"}`,
      `What's needed: ${need || "—"}`,
      `Urgency: ${urgency || "—"}`,
      `Service type: ${serviceType || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend send failed", error);
    return { status: "error", message: "Failed to send. Please call us instead." };
  }

  return { status: "success" };
}
