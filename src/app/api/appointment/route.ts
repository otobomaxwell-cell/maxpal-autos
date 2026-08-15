import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/business";

type AppointmentPayload = {
  readonly name?: string;
  readonly phone?: string;
  readonly registration?: string;
  readonly postcode?: string;
  readonly need?: string;
  readonly urgency?: string;
  readonly serviceType?: string;
};

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  const payload = (await request.json()) as AppointmentPayload;

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from: `${business.name} Website <${fromEmail}>`,
    to: business.notificationEmail,
    subject: `New appointment request – ${singleLine(name)}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Vehicle registration: ${payload.registration?.trim() || "—"}`,
      `Postcode: ${payload.postcode?.trim() || "—"}`,
      `What's needed: ${payload.need?.trim() || "—"}`,
      `Urgency: ${payload.urgency || "—"}`,
      `Service type: ${payload.serviceType || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend send failed", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
