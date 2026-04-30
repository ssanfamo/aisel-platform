console.log("CONTACT API HIT");

export async function GET() {
  return Response.json({
    message: "AISEL API is running",
  });
}
