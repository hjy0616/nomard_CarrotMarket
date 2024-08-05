import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  return Response.json({
    ok: true,
  });
}

export async function POST(req: NextRequest) {
  req.cookies.get("");
  const data = await req.json();
  return Response.json(data);
}
