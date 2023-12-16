import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { verifyJwtToken } from '@/libs/auth';

const AUTH_PAGES = ['/login', '/register'];

const isAuthPages = (url: string) =>
    AUTH_PAGES.some((page) => page.startsWith(url));

export default async function middleware(request: NextRequest) {
    const { url, nextUrl, cookies } = request;

    const { value: token } = cookies.get('token') ?? {
        value: null,
    };

    // const hasVerifiedToken = token && (await verifyJwtToken(token));

    const temp = nextUrl.pathname.slice(3, nextUrl.pathname.length - 1);
    let isAuthPageRequested;
    if (temp != '') isAuthPageRequested = isAuthPages(temp);

    const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';
    const handleI18nRouting = createIntlMiddleware({
        locales: ['en', 'de', 'es', 'jp'],
        defaultLocale,
    });
    const response = handleI18nRouting(request);
    response.headers.set('x-your-custom-locale', defaultLocale);

    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|de|es|jp)/:path*', '/api/:path*'],
};

// import { NextResponse } from "next/server";
// import { verifyJwtToken } from "@/libs/auth";

// const AUTH_PAGES = ["/login", "/register"];

// const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url));

// export async function middleware(request) {
//   const { url, nextUrl, cookies } = request;
//   const { value: token } = cookies.get("token") ?? { value: null };

//   const hasVerifiedToken = token && (await verifyJwtToken(token));
//   const isAuthPageRequested = isAuthPages(nextUrl.pathname);

//   if (isAuthPageRequested) {
//     if (!hasVerifiedToken) {
//       const response = NextResponse.next();
//       response.cookies.delete("token");
//       return response;
//     }

//     const response = NextResponse.redirect(new URL(`/`, url));
//     return response;
//   }

//   if (!hasVerifiedToken) {
//     const searchParams = new URLSearchParams(nextUrl.searchParams);
//     searchParams.set("next", nextUrl.pathname);

//     const response = NextResponse.redirect(
//       new URL(`/login?${searchParams}`, url)
//     );
//     response.cookies.delete("token");

//     return response;
//   }

//   return NextResponse.next();
// }

// export const config = { matcher: ["/login", "/panel/:path*"] };
