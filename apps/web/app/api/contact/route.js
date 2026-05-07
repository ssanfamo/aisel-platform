import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {

  try {

    const body = await request.json();

    console.log("Incoming Form Data:", body);

    const {
      name,
      company,
      email,
      environment,
      challenges,
      goals,
    } = body;

    // VALIDATION
    if (
      !name?.trim() ||
      !email?.trim() ||
      !challenges?.trim()
    ) {

      return Response.json(
        {
          success: false,
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const data = await resend.emails.send({

      from: "AISEL Technologies <contact@aiseltechnologies.com>",

      to: ["info@aiseltechnologies.com"],

      replyTo: email,

      subject: "New Infrastructure Assessment Request",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2>Infrastructure Assessment Request</h2>

          <hr />

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Company:</strong><br />
            ${company || "N/A"}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Environment:</strong><br />
            ${environment || "N/A"}
          </p>

          <h3>Infrastructure Challenges</h3>

          <p>
            ${challenges}
          </p>

          <h3>Project Goals</h3>

          <p>
            ${goals || "N/A"}
          </p>

        </div>
      `,
    });

    console.log("Resend Response:", data);

    if (data.error) {

      return Response.json(
        {
          success: false,
          error: data.error.message,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {

    console.error("API Error:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}