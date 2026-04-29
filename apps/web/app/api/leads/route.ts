import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "leads.json");

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const leads = JSON.parse(data || "[]");

    return NextResponse.json(leads);

  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
}