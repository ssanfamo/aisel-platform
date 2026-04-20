export async function POST(req: Request) {
  const body = await req.json();

  console.log("New contact submission:", body);

  return Response.json({
    success: true,
    message: "Message received successfully"
  });
}
