import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import prisma from '@/libs/prisma';

export async function GET(
    req: NextRequest,
    { params }: { params: { topicId: string } }
) {
    try {
        const { topicId } = params;
        const url = new URL(req.url);
        const page: number = Number(url.searchParams.get('page')) || 1;
        const size: number = Number(url.searchParams.get('size')) || 20;

        const posts = await prisma.post.findMany({
            where: {
                topicId: topicId,
            },
            skip: (page - 1) * size,
            take: size,
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json({ success: true, topics: posts });
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
