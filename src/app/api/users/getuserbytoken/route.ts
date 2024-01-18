import prisma from '@/libs/prisma';
import { NextResponse, NextRequest } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';

export async function GET(req: NextRequest) {
    try {
        const id = String(req.headers.get('id'));

        const user = await prisma.user.findFirst({
            where: {
                id: id,
            },
        });

        if (user) {
            user.password = '';
            return NextResponse.json({
                success: true,
                user,
            });
        }

        return error({
            statusCode: httpStatus.BAD_REQUEST,
            message: 'User not found',
        });
    } catch (err) {
        return error({
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            error: err,
        });
    }
}
