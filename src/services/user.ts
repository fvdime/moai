import prisma from '@/libs/prisma';

export const GetUserById = async (id: string) => {
    return await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
};
