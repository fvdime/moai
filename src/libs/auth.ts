import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export function getJwtSecretKey() {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

    if (!secret) {
        throw new Error('JWT Secret key is not matched');
    }

    return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey());

        return payload;
    } catch (error) {
        return null;
    }
}


export function getToken() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    return token || "";
}