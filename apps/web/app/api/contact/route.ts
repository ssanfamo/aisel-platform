import { NextResponse } from "next/server";
import { Resend } from "resend";

// ✅ Initialize once
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("🔥 CONTACT API HIT");

  try {
    // ✅ Ensure API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    // ✅ Parse request body
    const body = await req.json();
    const { name, email, message, company, service } = body;

    console.log("📩 Incoming:", { name, email });

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Basic spam protection
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message too short" },
        { status: 400 }
      );
    }

    // =========================
    // 📧 1. SEND TO YOU
    // =========================
    const { data: adminData, error: adminError } =
      await resend.emails.send({
        from: "AISEL <info@aiseltechnologies.com>", // ✅ production sender
        to: "info@aiseltechnologies.com",
        subject: "New Contact Form Submission",
        html: `
          <h2>New Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Service:</strong> ${service || "-"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });

    if (adminError) {
      console.error("❌ Admin email failed:", adminError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("✅ Admin email sent:", adminData);

    // =========================
    // 📧 2. AUTO-REPLY TO USER
    // =========================
    const { error: userError } = await resend.emails.send({
      from: "AISEL <info@aiseltechnologies.com>",
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to AISEL Technologies.</p>
        <p>We’ve received your message and will get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>AISEL Technologies</strong></p>
      `,
    });

    if (userError) {
      console.error("⚠️ Auto-reply failed:", userError);
      // ❗ Do NOT fail request because of this
    }

    console.log("✅ Contact flow completed");

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("💥 API ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}