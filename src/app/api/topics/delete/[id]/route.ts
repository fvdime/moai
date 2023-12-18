import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import prisma from '@/libs/prisma';

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const userId = JSON.parse(req.headers.get('id') || '');

        const deletedTopic = await prisma.topic.delete({
            where: {
                id: params.id,
                userId: userId,
            },
        });

        if (deletedTopic)
            return NextResponse.json(
                { success: true },
                { status: httpStatus.OK }
            );
        else
            return NextResponse.json(
                { success: false },
                { status: httpStatus.BAD_REQUEST }
            );
    } catch (err) {
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
