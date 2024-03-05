"use server";

export const fetchPosts = async (page: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}posts/get?page=${page}&limit=8`
  );
  const responseBody = await response.json();
  console.log(responseBody);
  if (!responseBody) {
    return [];
  }
  const data = responseBody?.posts;
  return data;
};
