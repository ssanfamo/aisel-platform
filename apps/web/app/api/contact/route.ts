import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("🔥 CONTACT API HIT");

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Missing RESEND_API_KEY");

      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // ✅ CRITICAL: dynamic import (prevents build-time execution)
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, email, message, company, service } = body;

    // ✅ Clean name
    const cleanName = name
      .trim()
      .split(/\s+/)
      .filter((word: string, index: number, arr: string[]) => arr.indexOf(word) === index)
      .join(" ");

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "AISEL <contact@aiseltechnologies.com>",
      to: "info@aiseltechnologies.com",
      subject: `New Contact Form Submission from ${cleanName}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("📨 DATA:", data);
    console.log("❌ ERROR:", error);

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