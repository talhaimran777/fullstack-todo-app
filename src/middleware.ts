import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // TODO: Add middleware logic here
  return NextResponse.next();
}
