import prisma from '@/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    {
        query,
        limit = 6,
        page = 1,
        hashtags,
    }: { query: string; limit: number; page: number; hashtags: Array<String> }
) {
    try {
        // Calculate the number of items to skip based on the page and limit
        const skip = (page - 1) * limit;

        // Fetch paginated posts using Prisma
        const posts = await prisma.post.findMany({
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' }, // Order by creation date, adjust as needed
        });

        // Return a JSON response with the 'posts' key
        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching posts');
    }
}
