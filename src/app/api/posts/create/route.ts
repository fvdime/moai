import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';
import error from '@/libs/error-handler';
import { z } from 'zod';
import { GetUserById } from '@/services/user';
import { CreatePost } from '@/services/post';
import uploadImage from '@/libs/upload-image';

const createSchema = z.object({
    body: z.string().min(1),
    // topicId: z.string(),
    hashtags: z.string().nullish(),
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const isValidData = createSchema.parse({
            body: formData.get('body'),
            // topicId: formData.get('topicId'),
            hashtags: formData.get('hashtags'),
        });

        console.log(isValidData);

        const id = req.headers.get('id') || '';

        const user = await GetUserById(id);

        if (!user) {
            return error({
                statusCode: httpStatus.BAD_REQUEST,
            });
        }

        const image = formData.get('image') as FormDataEntryValue;
        let filePath = '';

        if (image) {
            const response = await uploadImage({ file: image });
            if (
                response !== null &&
                response.result['$metadata'].httpStatusCode == 200
            )
                filePath = response.filePath;
        }

        const hashtags = isValidData.hashtags?.split(',');

        const post = await CreatePost({
            body: isValidData.body,
            userId: user.id,
            image: filePath,
            hashtags: hashtags || [],
        });

        return NextResponse.json(
            { success: true, post },
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
