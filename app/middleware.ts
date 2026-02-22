import { createSupabaseMiddlewareClient } from "@/lib/supabase/middlewareClient";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const { supabase, supabaseResponse } = createSupabaseMiddlewareClient(
    request,
    response
  );

  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  const isLoginPage =
    request.nextUrl.pathname === "/admin" ||
    request.nextUrl.pathname === "/admin/";

  if (!user && request.nextUrl.pathname.startsWith("/admin")) {
    if (!isLoginPage) {
      const redirectResponse = NextResponse.redirect(
        new URL("/admin", request.url)
      );
      supabaseResponse.cookies.getAll().forEach((cookie) => {
        redirectResponse.cookies.set(cookie.name, cookie.value);
      });
      return redirectResponse;
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*"],
};
