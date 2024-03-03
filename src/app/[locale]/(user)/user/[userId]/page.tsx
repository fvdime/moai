import FeedLayout from "@/components/feed-props/feed-layout";
import UserPost from "@/components/feed-props/user-post";
import { PostParams, UserParams } from "@/libs/types";
import { GetAllPostsByUser } from "@/services/post";
import { GetUserById } from "@/services/user";
import React from "react";
import { verifyJwtToken } from "@/libs/auth";
import { cookies } from "next/headers";

const UserProfilePage = async ({ params }: any) => {
  const cookieStore = cookies();
  const token: string = cookieStore.get("token")?.value || "";
  const payload = await verifyJwtToken(token);

  const id = params?.userId;

  const isOwnPage = payload?.id == id;

  const user = await GetUserById(id);

  const userPosts = await GetAllPostsByUser(id);

  return (
    <FeedLayout
      isUserPage={true}
      user={user as UserParams}
      isOwnPage={isOwnPage}
    >
      <div className="w-full h-full border-b border-zinc-600 ">
        <div className="px-4 pb-3 flex flex-row justify-start items-center w-full text-white">
          <h1>Overview</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4">
        {userPosts?.length > 0 ? (
          <>
            {/* @ts-ignore */}
            {userPosts.map((post) => (
              <UserPost
                user={user as UserParams}
                post={post as PostParams}
                key={post.id}
                isOwnPage={isOwnPage}
              />
            ))}
          </>
        ) : (
          <span className="text-white font-medium text-sm"> No posts yet</span>
        )}
      </div>
    </FeedLayout>
  );
};

export default UserProfilePage;
