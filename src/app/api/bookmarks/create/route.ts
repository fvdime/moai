import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';
import { GetUserById } from '@/services/user';
import { CreateBookmark } from '@/services/bookmark';

const createSchema = z.object({
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

        const bookmark = await CreateBookmark({
            ...isValidData,
            userId: user.id,
        });

        return NextResponse.json(
            { success: true, bookmark },
            { status: httpStatus.CREATED }
        );
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
