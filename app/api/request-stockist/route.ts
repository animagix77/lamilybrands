import { NextResponse } from "next/server";
import { Resend } from "resend";

// TEMPORARY: same Resend free-tier constraint as /api/subscribe — until a
// sending domain is verified, the only allowed recipient is the Resend
// account email. Switch to `info@judgedeanllc.com` after domain setup.
const FORWARD_TO = "animagix@mac.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = 200; // generous cap; protects against abusive payloads

type ParsedFields = {
  email: string;
  storeName: string;
  location: string;
  firstName: string;
};

function readField(form: FormData | null, key: string): string {
  return String(form?.get(key) ?? "").trim().slice(0, MAX);
}

function validate(fields: ParsedFields): string | null {
  if (!EMAIL_RE.test(fields.email)) return "Please enter a valid email address.";
  if (!fields.storeName) return "Please tell us which store you'd like to find us at.";
  if (!fields.location) return "Please include the store's city or zip.";
  return null;
}

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);

  const fields: ParsedFields = {
    email: readField(formData, "email"),
    storeName: readField(formData, "storeName"),
    location: readField(formData, "location"),
    firstName: readField(formData, "firstName"),
  };

  const validationError = validate(fields);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const { email, storeName, location, firstName } = fields;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      `[request-stockist] RESEND_API_KEY not set — received request for ${storeName} (${location}) from ${email}, did not send.`,
    );
    return NextResponse.json({ ok: true, sent: false });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Lamily Site <onboarding@resend.dev>",
    to: FORWARD_TO,
    replyTo: email,
    subject: `Stockist request — ${storeName} (${location})`,
    text: [
      "A new visitor wants Lamily carried at a specific store.",
      "",
      `Email:    ${email}`,
      `Name:     ${firstName || "(not provided)"}`,
      `Store:    ${storeName}`,
      `Location: ${location}`,
      "",
      "Reply-To is set to the visitor's email — hit reply to respond directly.",
    ].join("\n"),
  });

  if (error) {
    console.error("[request-stockist] Resend send error:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, sent: true });
}
