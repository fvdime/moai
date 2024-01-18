"use server"

const url = `${process.env.NEXT_PUBLIC_API_BASE}posts/get`;


export const fetchPosts = async (page: number) => {
  const response = await fetch(`http://localhost:3000/api/posts/get?page=${page}&limit=8`)

   // Read the response text
   const responseBody = await response.text();

   // Check if the response body is empty

   //it is empty tf
   if (!responseBody) {
     console.error("Empty response body");
     throw new Error("Empty response body");
   }

   const data = JSON.parse(responseBody);
   console.log("DATA:", data);
   return data;
}