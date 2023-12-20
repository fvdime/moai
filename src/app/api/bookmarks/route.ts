import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';
import { GetUserById } from '@/services/user';
import { GetAllBookmarkByUser } from '@/services/bookmark';

export async function GET(req: NextRequest) {
    try {
        const id = req.headers.get('id') || '';

        const user = await GetUserById(id);

        if (!user) {
            return error({
                statusCode: httpStatus.BAD_REQUEST,
            });
        }

        const bookmarks = await GetAllBookmarkByUser(user.id);

        return NextResponse.json(
            {
                success: true,
                bookmarks,
            },
            { status: httpStatus.OK }
        );
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
