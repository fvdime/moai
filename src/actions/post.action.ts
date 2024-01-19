'use server';

export const fetchPosts = async (page: number) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/posts/get?page=${page}&limit=8`
    );
    const responseBody = await response.text();
    if (!responseBody) {
        console.error('Empty response body');
        throw new Error('Empty response body');
    }
    const data = JSON.parse(responseBody);
    return data;
};
