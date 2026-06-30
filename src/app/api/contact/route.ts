import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  // --- Wire up real delivery when you're ready. Example with Resend:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Portfolio <contact@yourdomain.com>",
  //   to: "you@example.com",
  //   replyTo: email,
  //   subject: `New message from ${name}`,
  //   text: message,
  // });
  //
  // Requires `npm install resend` and a RESEND_API_KEY env var.

  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ success: true });
}
