import prisma from '@/libs/prisma';

export const CreateBookmark = async (bookmark: {
    userId: string;
    postId: string;
}) =>
    await prisma.bookmark.create({
        data: bookmark,
    });
