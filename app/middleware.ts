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

  // Use getUser() for better security as it re-verifies the session
  const { data: { user } } = await supabase.auth.getUser();

  const isLoginPage =
    request.nextUrl.pathname === "/admin" ||
    request.nextUrl.pathname === "/admin/";

  const isDashboardPath = request.nextUrl.pathname.startsWith("/admin");

  // If user is NOT logged in and trying to access a protected admin page (not login page)
  if (!user && isDashboardPath && !isLoginPage) {
    const redirectUrl = new URL("/admin", request.url);
    const redirectResponse = NextResponse.redirect(redirectUrl);
    
    // Copy cookies to redirect response
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value);
    });
    
    return redirectResponse;
  }

  // If user IS logged in and trying to access the login page
  if (user && isLoginPage) {
    const redirectUrl = new URL("/admin/dashboard", request.url);
    const redirectResponse = NextResponse.redirect(redirectUrl);
    
    // Copy cookies to redirect response
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value);
    });
    
    return redirectResponse;
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*"],
};
