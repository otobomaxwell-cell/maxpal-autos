"use server";

import { Resend } from "resend";
import { z } from "zod";
import { business, serviceTypeOptions, urgencyOptions } from "@/lib/business";

const urgencyValues = urgencyOptions.map((option) => option.value) as [string, ...string[]];
const serviceTypeValues = serviceTypeOptions.map((option) => option.value) as [string, ...string[]];

const appointmentSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(200),
  email: z.string().trim().min(1, "Email address is required.").email("Enter a valid email address.").max(320),
  phone: z.string().trim().min(1, "Phone number is required.").max(40),
  registration: z.string().trim().max(20).optional(),
  postcode: z.string().trim().max(20).optional(),
  need: z.string().trim().max(2000).optional(),
  urgency: z.enum(urgencyValues).optional(),
  serviceType: z.enum(serviceTypeValues).optional(),
});

export type AppointmentActionState =
  | { readonly status: "idle" }
  | { readonly status: "success" }
  | { readonly status: "error"; readonly message: string };

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

// Server Actions are POST endpoints reachable by anyone who can send the
// same request, not just through this form - see Next's server-actions
// guide. Framework-level CSRF/origin checks apply automatically, but input
// validation is still entirely on us, same as the Route Handler this
// replaced.
export async function submitAppointment(
  _prevState: AppointmentActionState,
  formData: FormData,
): Promise<AppointmentActionState> {
  const parsed = appointmentSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid request.";
    return { status: "error", message };
  }

  const { name, email, phone, registration, postcode, need, urgency, serviceType } = parsed.data;

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
