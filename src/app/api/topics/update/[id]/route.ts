import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import prisma from '@/libs/prisma';
import { z } from 'zod';

const updateSchema = z
    .object({
        title: z.string().min(3),
        published: z.boolean(),
    })
    .partial();

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const isValidData = updateSchema.parse(body);
        const userId = JSON.parse(req.headers.get('id') || '');

        const existTopic = await prisma.topic.findFirst({
            where: {
                id: params.id,
                userId: userId,
            },
        });

        if (!existTopic)
            return NextResponse.json(
                { success: false },
                { status: httpStatus.NOT_FOUND }
            );

        const updatedData = {
            ...(isValidData.title !== null && { title: isValidData.title }),
            ...(isValidData.published !== null && {
                published: isValidData.published,
            }),
        };

        const updatedTopic = await prisma.topic.update({
            where: {
                id: existTopic.id,
            },
            data: updatedData,
        });

        return NextResponse.json(
            { success: true, topic: updatedTopic },
            { status: httpStatus.OK }
        );
    } catch (err) {
        console.log(err);
        return error({
            error: err,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
