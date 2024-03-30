import { NextRequest, NextResponse } from "next/server";
function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL(`/sign-in`, request.url));
  return NextResponse.next();
}

export const config = {
  matcher: "/Self-Development",
};

export default middleware;
