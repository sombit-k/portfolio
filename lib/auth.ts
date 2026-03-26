import { NextResponse } from "next/server";

export function assertAdmin(req: Request) {
  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) {
    return NextResponse.json(
      { error: "ADMIN_SECRET environment variable is not configured." },
      { status: 500 }
    );
  }

  const provided = req.headers.get("x-admin-key");

  if (provided !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
