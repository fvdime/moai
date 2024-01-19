import prisma from '@/libs/prisma';
import { NextResponse, NextRequest } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';

const updateSchema = z.object({
    username: z
        .string()
        .regex(new RegExp(/^[a-zA-Z0-9-]{3,30}$/))
        .nullish(),
    email: z.string().email('This is not a valid email.').nullish(),
});

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();

        const isValidData = updateSchema.parse(body);

        const id = String(req.headers.get('id'));

        const user = await prisma.user.findFirst({
            where: {
                id: id,
            },
        });

        if (user) {
            const newUser = await prisma.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    email: isValidData.email || user.email,
                    username: isValidData.username || user.username,
                },
            });

            return NextResponse.json(
                {
                    success: true,
                    user: newUser,
                },
                { status: 200 }
            );
        }

        return error({
            statusCode: httpStatus.BAD_REQUEST,
            message: 'User not updated',
        });
    } catch (err) {
        return error({
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            error: err,
        });
    }
}
