export async function GET() {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "http://api:8000";

  const res = await fetch(baseUrl);
  const data = await res.json();

  return Response.json(data);
}
