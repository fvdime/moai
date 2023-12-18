import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { verifyJwtToken } from '@/libs/auth';

const AUTH_PAGES = ['/login', '/register'];

const isAuthPages = (url: string) =>
    AUTH_PAGES.some((page) => page.startsWith(url));

export default async function middleware(request: NextRequest) {
    const { url, nextUrl, cookies } = request;

    const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';
    const handleI18nRouting = createIntlMiddleware({
        locales: ['en', 'de', 'es', 'jp'],
        defaultLocale,
    });
    const response = handleI18nRouting(request);
    response.headers.set('x-your-custom-locale', defaultLocale);

    const { value: token } = cookies.get('token') ?? {
        value: null,
    };

    let payload;

    if (token) {
        payload = await verifyJwtToken(token);
    }

    const temp = nextUrl.pathname.slice(3, nextUrl.pathname.length - 1);
    let isAuthPageRequested;
    if (temp != '') isAuthPageRequested = isAuthPages(temp);

    if (nextUrl.pathname.startsWith('/api')) {
        if (!payload) {
            return NextResponse.json(
                { success: false, errCode: '401' },
                { status: 401 }
            );
        }

        //console.log('pay', payload);

        return NextResponse.next({
            headers: {
                id: JSON.stringify(payload?.id),
            },
        });
    }

    if (isAuthPageRequested) {
        if (!payload) {
            response.cookies.delete('token');
            return response;
        }

        return NextResponse.redirect(new URL(`/`, url));
    }

    if (!payload) {
        const searchParams = new URLSearchParams(nextUrl.searchParams);
        searchParams.set('next', nextUrl.pathname);
        const response = NextResponse.redirect(
            new URL(`/login?${searchParams}`, url)
        );
        response.cookies.delete('token');
        return response;
    }

    // if (typeof payload.id == 'string') response.headers.set('id', payload?.id);

    return response;
}

export const config = {
    matcher: [
        '/',
        '/(en|de|es|jp)/:path*',
        '/api/topics/create',
        '/api/topics/delete/:path*',
        '/api/topics/update/:path*',
        '/api/users',
        '/api/users/profileimage',
    ],
};
