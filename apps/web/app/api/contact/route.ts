import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Initialize INSIDE function
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "AISEL <noreply@aiseltechnologies.com>",
      to: ["info@aiseltechnologies.com"],
      subject: "New Contact Form Message",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false });
  }
}
