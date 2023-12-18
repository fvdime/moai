import prisma from '@/libs/prisma';
import { NextResponse, NextRequest } from 'next/server';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import error from '@/libs/error-handler';
import { z } from 'zod';
import { SignJWT } from 'jose';
import { getJwtSecretKey } from '@/libs/auth';
import { expTime } from '@/libs/commons';

const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        let user;

        const isValidData = loginSchema.parse(body);

        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(isValidData.username)) {
            user = await prisma.user.findFirst({
                where: {
                    email: isValidData.username,
                },
                select: {
                    username: true,
                    email: true,
                    id: true,
                    password: true,
                },
            });
        } else if (
            /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
                isValidData.username
            )
        ) {
            user = await prisma.user.findFirst({
                where: {
                    username: isValidData.username,
                },
                select: {
                    username: true,
                    email: true,
                    id: true,
                    password: true,
                },
            });
        }

        if (!user)
            return NextResponse.json(
                {
                    success: false,
                    message: 'User not found',
                },
                { status: httpStatus.BAD_REQUEST }
            );

        const match = await bcrypt.compare(isValidData.password, user.password);

        if (match) {
            user.password = '';

            const token = await new SignJWT({
                id: user.id,
                username: user.username,
                email: user.email,
            })
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('4h')
                .sign(getJwtSecretKey());

            const response = NextResponse.json(
                { success: true, user, token },
                { status: 200, headers: { 'content-type': 'application/json' } }
            );

            response.cookies.set({
                name: 'token',
                value: token,
                path: '/',
                expires: Date.now() + expTime,
            });

            return response;
        }

        return error({
            statusCode: httpStatus.BAD_REQUEST,
            message: 'Password is wrong',
        });
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
