import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ Log lead (temporary storage)
    console.log("New Lead:", {
      name,
      email,
      company,
      service,
      message,
      createdAt: new Date().toISOString(),
    });

    // 2️⃣ Send email to YOU
    await resend.emails.send({
      from: "AISEL <onboarding@resend.dev>",
      to: "your-email@example.com", // 🔴 CHANGE THIS
      subject: "New Website Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 3️⃣ Send auto-reply to USER
    await resend.emails.send({
      from: "AISEL <onboarding@resend.dev>",
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to AISEL Technologies.</p>
        <p>We’ve received your message and will get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,<br/>AISEL Technologies</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}