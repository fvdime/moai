import { DeletePost } from "@/services/post";
import { GetUserById } from "@/services/user";
import axios from "axios";
import Image from "next/image";
import { Link } from "@/components/navigation-link";
import React from "react";
import DeleteButton from "./delete-button";

const UserPost = async ({ post, user, isOwnPage }: any) => {
  const userCreatedAt = new Date(post.createdAt);
  const formattedTime = userCreatedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full">
      <Link href={`/feed/${post.id}`}>
        <div className="flex items-start gap-2.5">
          <Image
            src={
              user?.profileImage
                ? `${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}${user?.profileImage}`
                : "/1.png"
            }
            alt="user photo"
            height={32}
            width={32}
            className="w-8 h-8 rounded-full object-cover object-center"
          />
          <div className="w-full flex flex-col gap-1">
            <div className="flex flex-col w-full leading-1.5 p-4 border border-zinc-700 rounded-e-xl rounded-es-xl bg-zinc-800 hover:border-zinc-500 ease-in transition-all duration-500">
              <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse mb-2">
                <span className="text-white text-xs font-bold">
                  - {user.username}
                </span>
                <span className="text-xs font-normal text-zinc-400">
                  {formattedTime}
                </span>
              </div>
              <p className="text-md font-semibold text-white">{post.title}</p>
              {post.image ? (
                <div className="relative w-full h-96 my-2.5">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}${post.image}`}
                    className="rounded absolute object-cover"
                    fill
                    alt="post image"
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="mb-2">
                {/* @ts-ignore */}
                {post?.hashtags.map((item, index) => (
                  <span className="text-xs text-gray-400 pr-2" key={index}>
                    {item === null ? "" : `#${item}`}
                  </span>
                ))}
              </div>
              <div className="w-full flex items-center justify-end">
                {/* <div className="flex gap-2 text-white">
                  <button>
                    <svg className="w-4 h-4 hover:text-sky-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                    </svg>
                  </button>
                  <span className="text-xs">45</span>
                  <button>
                    <svg className="w-4 h-4 hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                    </svg>
                  </button>
                </div> */}

                <div className="flex gap-2 text-white">
                  <button>
                    <svg
                      className="w-4 h-4 hover:text-zinc-300 hover:shadow-lg"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 18"
                      fill="currentColor"
                    >
                      <path
                        d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  {isOwnPage ? <DeleteButton id={post.id} /> : ""}
                  {/* <button>
                      <svg className="hover:text-zinc-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserPost;
