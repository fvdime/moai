import prisma from '@/libs/prisma';

export const CreateTopic = async (topic: { title: string; userId: string }) => {
    return await prisma.topic.create({
        data: {
            ...topic,
        },
    });
};

export const GetAllTopicByPaged = async (
    page: number = 1,
    size: number = 10,
    orderBy: string = 'desc'
) => {
    return await prisma.topic.findMany({
        skip: (page - 1) * size,
        take: size,
        orderBy: { createdAt: orderBy == 'asc' ? 'asc' : 'desc' },
    });
};

export const GetTopic = async (where: { id: string; userId?: string }) => {
    return await prisma.topic.findFirst({
        where,
    });
};
