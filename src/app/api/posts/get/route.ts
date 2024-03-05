import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
  // {
  //   query,
  //   limit,
  //   page = 1,
  //   hashtags,
  // }: { query: string; limit: number; page: number; hashtags: Array<String> }
) {
  try {
    // Calculate the number of items to skip based on the page and limit
    const url = new URL(request.url);

    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 6;

    const skip = (page - 1) * limit;

    // Fetch paginated posts using Prisma
    const posts = await prisma.post.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }, // Order by creation date, adjust as needed
      include: {
        user: true,
      },
    });

    console.log(posts);

    // Return a JSON response with the 'posts' key
    return NextResponse.json({ posts, success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ posts: [] });
  }
}
