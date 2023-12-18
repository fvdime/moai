import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';
import { GetUserById } from '@/services/user';
import { CreateTopic } from '@/services/topic';

const createSchema = z.object({
    title: z.string().min(3),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const isValidData = createSchema.parse(body);
        const id = JSON.parse(req.headers.get('id') || '');

        const user = await GetUserById(id);

        if (!user) {
            return error({
                statusCode: httpStatus.BAD_REQUEST,
            });
        }

        const topic = await CreateTopic({
            ...isValidData,
            userId: user.id,
        });

        return NextResponse.json(
            { success: true, topic },
            { status: httpStatus.CREATED }
        );
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}

export async function GET(req: NextRequest, { searchParams }: any) {
    try {
        console.log(searchParams);

        return NextResponse.json({ success: true });
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
