import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import prisma from '@/libs/prisma';
import { GetAllTopicByPaged } from '@/services/topic';

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const page: number = Number(url.searchParams.get('page')) || 1;
        const size: number = Number(url.searchParams.get('size')) || 20;

        const topics = await GetAllTopicByPaged(page, size);

        return NextResponse.json({ success: true, topics: topics });
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
