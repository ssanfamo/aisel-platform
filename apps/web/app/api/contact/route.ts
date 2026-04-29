import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY!);

// File storage (temporary CRM)
const filePath = path.join(process.cwd(), "leads.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, service, message } = body;

    // 🔒 Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newLead = {
      name,
      email,
      company: company || "",
      service: service || "",
      message,
      createdAt: new Date().toISOString(),
    };

    // 📦 Load existing leads
    let leads: any[] = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      leads = JSON.parse(fileData || "[]");
    }

    // ➕ Add new lead (latest first)
    leads.unshift(newLead);

    // 💾 Save back to file
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    // 📧 1. Notify YOU
    await resend.emails.send({
      from: "AISEL <onboarding@resend.dev>",
      to: "info@aiseltechnologies.com", // 🔴 CHANGE THIS
      subject: "New Website Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <p><small>Submitted at ${new Date().toLocaleString()}</small></p>
      `,
    });

    // 📧 2. Auto-reply to USER
    await resend.emails.send({
      from: "AISEL <onboarding@resend.dev>",
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>

        <p>Thank you for contacting <strong>AISEL Technologies</strong>.</p>

        <p>We’ve received your message and will review your request carefully.</p>

        <p>You can expect a response within <strong>24 hours</strong>.</p>

        <br/>

        <p>Best regards,<br/>
        AISEL Technologies</p>
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