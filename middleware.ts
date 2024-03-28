import { NextRequest, NextResponse } from "next/server";

export async function getServerSideProps() {
  // Perform logic to determine isLogin value
  const isLogin = "login"; // Example: Retrieve from Redux store or perform any other operation
  return {
    props: {
      login: isLogin,
    },
  };
}

function middleware(request: NextRequest, props: any) {
  // return NextResponse.redirect(new URL(`/sign-in`, request.url));
  return NextResponse.next();
}

export const config = {
  matcher: "/Self-Development",
};

export default middleware;
