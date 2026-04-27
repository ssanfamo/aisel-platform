import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, service, message } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔹 For now: log the lead (replace later with DB/email)
    console.log("New Lead Received:", {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
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