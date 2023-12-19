import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { GetAllCommentByPost } from '@/services/comment';

export async function GET(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    try {
        const comments = await GetAllCommentByPost(params.postId);

        return NextResponse.json(
            { success: true, comments },
            { status: httpStatus.CREATED }
        );
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
