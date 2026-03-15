import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Routes that require login
  const protectedRoutes = ["/checkout"];

  // Auth pages
  const authRoutes = ["/auth/login", "/auth/register"];

  // If user is NOT logged in and tries to access protected route
  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If user IS logged in and tries to access login/register
  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/auth/login", "/auth/register"],
};