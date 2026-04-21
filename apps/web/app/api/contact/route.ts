import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

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

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error(error);
    return Response.json({
      success: false,
      message: "Email failed",
    });
  }
}