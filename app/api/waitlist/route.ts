import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    console.log("[Waitlist API] Received signup request for:", email);

    if (!email || !email.includes("@")) {
      console.log("[Waitlist API] Invalid email rejected:", email);
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 },
      );
    }

    // Send notification to yourself
    console.log("[Waitlist API] Sending notification email via Resend...");
    const result = await resend.emails.send({
      from: "Vextra Waitlist <waitlist@vextralimited.com>",
      to: "info@vextralimited.com",
      subject: "New Vextra Waitlist Signup",
      html: `
        <h2>New waitlist signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("[Waitlist API] Resend response:", result);

    return NextResponse.json({ success: true, email });
  } catch (error) {
    console.error("[Waitlist API] Error:", error);
    return NextResponse.json(
      { error: "Failed to process signup" },
      { status: 500 },
    );
  }
}
