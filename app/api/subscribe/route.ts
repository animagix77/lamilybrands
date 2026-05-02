import { NextResponse } from "next/server";
import { Resend } from "resend";

const FORWARD_TO = "info@judgedeanllc.com";

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);
  const email = String(formData?.get("email") ?? "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Dry-run mode: form is wired up but Resend isn't configured yet.
    // The submission shows up in the server log so you can verify the
    // wiring works before completing email setup.
    console.warn(
      `[subscribe] RESEND_API_KEY not set — received ${email}, did not send.`,
    );
    return NextResponse.json({ ok: true, sent: false });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Lamily Site <onboarding@resend.dev>",
    to: FORWARD_TO,
    replyTo: email,
    subject: "New newsletter signup — lamilybrands.com",
    text: `A new visitor signed up via the footer newsletter form.\n\nEmail: ${email}\n`,
  });

  if (error) {
    console.error("[subscribe] Resend send error:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, sent: true });
}
