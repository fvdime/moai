"use server";

export const fetchPosts = async (page: number, limit: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}posts/get?page=${page}&limit=${limit}`,
    { next: { revalidate: 3600 } }
  );
  const responseBody = await response.json();
  if (!responseBody) {
    return [];
  }
  const data = responseBody?.posts;
  return data;
};
