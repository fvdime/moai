import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/libs/auth";
import { redirect } from "./components/navigation-link";

const AUTH_PAGES = ["/login", "/register"];

const PROTECTED_PAGES = ["/profile", "/feed"];

const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page) => page.startsWith(url));

const isProtectedPages = (url: string) =>
  PROTECTED_PAGES.some((page) => page.startsWith(url));

export default async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;

  const defaultLocale = nextUrl.pathname.slice(1, 3) || "en";
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "de", "es", "ja"],
    defaultLocale,
  });
  const response = handleI18nRouting(request);
  response.headers.set("x-your-custom-locale", defaultLocale);

  let { value: token } = cookies.get("token") ?? {
    value: null,
  };

  if (!token)
    token = request?.headers?.get("authorization")?.split(" ")[1] || null;

  let payload;

  if (token) {
    payload = await verifyJwtToken(token);
  }

  const temp = nextUrl.pathname.slice(3, nextUrl.pathname.length - 1);
  let isAuthPageRequested;
  if (temp != "") isAuthPageRequested = isAuthPages(temp);

  if (nextUrl.pathname.startsWith("/api")) {
    if (!payload) {
      return NextResponse.json(
        { success: false, errCode: "401" },
        { status: 401 }
      );
    }

    return NextResponse.next({
      headers: {
        id: String(payload?.id),
      },
    });
  }

  if (isAuthPageRequested) {
    if (!payload) {
      response.cookies.delete("token");
      return response;
    }

    return NextResponse.redirect(new URL(`/${defaultLocale}`, url));
  }

  const temp2 = nextUrl.pathname.slice(3, nextUrl.pathname.length - 1);
  let isProtectedPageRequest = temp != "" ? isProtectedPages(temp2) : false;

  if (!payload && isProtectedPageRequest) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    const response = NextResponse.redirect(
      new URL(`/${defaultLocale}/login?${searchParams}`, url)
    );
    response.cookies.delete("token");
    return response;
  }

  if (temp == "" && payload) {
    return NextResponse.redirect(new URL(`/${defaultLocale}/feed`, url));
  }

  response.headers.set("id", String(payload?.id));

  return response;
}

export const config = {
  matcher: [
    "/",
    "/(en|de|es|ja)/:path*",
    "/api/topics/create",
    "/api/topics/delete/:path*",
    "/api/topics/update/:path*",
    "/api/posts/create",
    "/api/posts/delete/:path*",
    "/api/comments/delete/:path*",
    "/api/comments/create",
    "/api/bookmarks/create",
    "/api/bookmarks",
    "/api/users",
    "/api/users/profileimage",
    "/api/users/getuserbytoken",
  ],
};
