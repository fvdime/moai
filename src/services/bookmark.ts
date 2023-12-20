import prisma from '@/libs/prisma';

export const CreateBookmark = async (bookmark: {
    userId: string;
    postId: string;
}) =>
    await prisma.bookmark.create({
        data: bookmark,
    });

export const GetBookmark = async (where: {
    id?: string;
    postId?: string;
    userId?: string;
}) =>
    await prisma.bookmark.findFirst({
        where,
    });

export const GetAllBookmarkByUser = async (userId: string) =>
    await prisma.bookmark.findMany({
        where: {
            userId,
        },
    });
