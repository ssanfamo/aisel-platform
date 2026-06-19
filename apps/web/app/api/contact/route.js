import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY missing");
  }

  return new Resend(apiKey);
}

export async function POST(request) {
  try {
    const body = await request.json();

    console.log(
      "Incoming Form Data:",
      body
    );

    const {
      name,
      company,
      email,
      service,
      environment,
      challenges,
      goals,
    } = body;

    // -------------------------
    // Validation
    // -------------------------

    if (
      !name?.trim() ||
      !email?.trim() ||
      !challenges?.trim()
    ) {
      return Response.json(
        {
          success: false,
          error:
            "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    // -------------------------
    // Initialize Resend
    // -------------------------

    const resend = getResend();

    // -------------------------
    // Send Email
    // -------------------------

    const data =
      await resend.emails.send({
        from:
          "AISEL Technologies <alerts@aiseltechnologies.com>",

        to: [
          "info@aiseltechnologies.com",
        ],

        replyTo: email,

        subject:
          `New ${service || "Infrastructure"} Inquiry`,

        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">

            <h2>
              Infrastructure Assessment Request
            </h2>

            <p>
              <strong>Submitted:</strong>
              ${new Date().toISOString()}
            </p>

            <hr />

            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Company:</strong><br />
              ${
                company || "N/A"
              }
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Service Interest:</strong><br />
              ${service || "Not specified"}
            </p>

            <p>
              <strong>Environment:</strong><br />
              ${
                environment ||
                "N/A"
              }
            </p>

            <h3>
              Infrastructure Challenges
            </h3>

            <p>
              ${challenges}
            </p>

            <h3>
              Project Goals
            </h3>

            <p>
              ${goals || "N/A"}
            </p>

          </div>
        `,
      });

    console.log(
      "Resend Response:",
      data
    );

    if (data?.error) {
      return Response.json(
        {
          success: false,
          error:
            data.error.message,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json(
      {
        success: true,
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "API Error:",
      error
    );

    return Response.json(
      {
        success: false,
        error:
          error?.message ||
          "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}