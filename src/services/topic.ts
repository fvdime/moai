import prisma from '@/libs/prisma';

export const CreateTopic = async (topic: { title: string; userId: string }) => {
    return await prisma.topic.create({
        data: {
            ...topic,
        },
    });
};
