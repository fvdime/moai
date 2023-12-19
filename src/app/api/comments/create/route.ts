import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';
import { GetUserById } from '@/services/user';
import { CreateComment } from '@/services/comment';

const createSchema = z.object({
    body: z.string().min(3),
    parentId: z.string().nullish(),
    postId: z.string(),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const isValidData = createSchema.parse(body);

        const id = req.headers.get('id') || '';

        const user = await GetUserById(id);

        if (!user) {
            return error({
                statusCode: httpStatus.BAD_REQUEST,
            });
        }

        const comment = await CreateComment({
            ...isValidData,
            userId: user.id,
        });

        return NextResponse.json(
            { success: true, comment },
            { status: httpStatus.CREATED }
        );
    } catch (err) {
        console.log(err);
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
