import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("🔥 CONTACT API HIT");

    // ✅ Ensure API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Missing RESEND_API_KEY");

      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // ✅ Initialize Resend at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    // ✅ Parse request body
    const body = await req.json();
    const { name, email, message, company, service } = body;

    // ✅ Final backend cleanup (safety net)
    const cleanName = name
      .trim()
      .split(/\s+/)
      .filter((word: string, index: number, arr: string[]) => arr.indexOf(word) === index)
      .join(" ");

    // ✅ Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Send email
    const { data, error } = await resend.emails.send({
      from: "AISEL <contact@aiseltechnologies.com>",
      to: "info@aiseltechnologies.com", // 🔴 replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("📨 DATA:", data);
    console.log("❌ ERROR:", error);

    // ✅ Handle resend error properly
    if (error) {
      return NextResponse.json(
        { error: JSON.stringify(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("💥 API ERROR:", error);

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}
