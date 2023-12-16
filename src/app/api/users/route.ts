import prisma from '@/libs/prisma';
import { NextResponse, NextRequest } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';

const updateSchema = z.object({
    fullName: z.string(),
    bio: z.string().min(6),
});

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();

        const isValidData = updateSchema.parse(body);

        // const user = await prisma.user.findFirst({
        //     where: {
        //         OR: [
        //             { email: isValidData.email },
        //             { username: isValidData.username },
        //         ],
        //     },
        // });

        // if (user) {
        //     if (user?.email === isValidData.email) {
        //         return error({
        //             statusCode: httpStatus.CONFLICT,
        //             message: 'Mail exists',
        //         });
        //     } else {
        //         return error({
        //             statusCode: httpStatus.CONFLICT,
        //             message: 'Username exists',
        //         });
        //     }
        // }

        // const savedUser = await prisma.user.create({
        //     data: {
        //         email: body.email,
        //         username: body.username,
        //         createdAt: new Date(Date.now()),
        //         password: hash,
        //     },
        //     select: {
        //         username: true,
        //         email: true,
        //         id: true,
        //     },
        // });

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
