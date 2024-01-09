import prisma from '@/libs/prisma';

export const CreatePost = async (post: {
    body: string;
    // topicId: string;
    userId: string;
    image?: string;
    hashtags: string[];
}) => {
    return await prisma.post.create({
        data: {
            ...post,
        },
    });
};

export const DeletePost = async (where: { id: string; userId?: string }) => {
    return await prisma.post.delete({
        where,
    });
};
