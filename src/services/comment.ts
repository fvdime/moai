import prisma from '@/libs/prisma';

export const CreateComment = async (comment: {
    body: string;
    parentId?: string | null;
    userId: string;
    postId: string;
}) => {
    return await prisma.comment.create({
        data: {
            ...comment,
        },
    });
};

export const GetAllCommentByPost = async (postId: string) => {
    return await prisma.comment.findMany({
        where: {
            postId: postId,
        },
    });
};
