import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
    cookies().delete('token');
    return NextResponse.json({ success: true });
}
