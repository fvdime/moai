import prisma from '@/libs/prisma';

export const CreatePost = async (post: {
    body: string;
    title: string;
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

type PipelineStage =
  | {
      $search: {
        index: string
        text: {
          query: string
          fuzzy: {}
          path: {
            wildcard: string
          }
        }
      }
    }
  | {
      $skip: number
    }
  | {
      $limit: number
    }
    
export const GetAllPost = async () => {
   const posts = await prisma.post.findMany()
   return posts
}

export const SinglePost = async (id: string) => {
    const post = await prisma.post.findFirst({
        where: {
            id: id
        }
    })

    return post
}

export const GetAllPostsByUser = async (userId: string) => {
  return await prisma.post.findMany({
      where: {
          userId: userId,
      },
  });
};