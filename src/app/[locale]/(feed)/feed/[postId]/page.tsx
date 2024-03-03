import { Link } from "@/components/navigation-link";
import { SinglePost } from "@/services/post";
import Image from "next/image";
import React from "react";
import Parser from "html-react-parser";
import { JSDOM } from "jsdom";
import CodeBlock from "@/components/post-props/code-block";
import CommentForm from "@/components/forms/comment-form";

const getComments = async (postId: string) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE + `comments/${postId}`
  );

  if (!res.ok) {
    return <></>;
  }

  return res.json();
};

const PostPage = async ({ params }: { params: { postId: string } }) => {
  const id = params?.postId;
  // console.log("POST ID:::::",id)

  const commentsData = await getComments(id);
  // console.log(commentsData)

  // console.log(commentsData.comments[0].body)

  const postInfo = await SinglePost(id);

  // console.log(postInfo)

  const timestamp = postInfo?.createdAt;
  const dateObject = new Date(timestamp!);

  const options = { month: "short", day: "2-digit" } as const;
  let formattedDate = "";
  let formattedTime = "";
  if (dateObject) {
    formattedTime = `${dateObject
      .getHours()
      .toString()
      .padStart(2, "0")}:${dateObject
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      dateObject
    );
  }

  // const commentTimestamp = commentsData?.comments[0].createdAt
  // const commentDateObject = new Date(commentTimestamp!);

  // const cOptions = { month: 'short', day: '2-digit' } as const;
  // const cFormattedDate = new Intl.DateTimeFormat('en-US', cOptions).format(commentDateObject);

  // const cFormattedTime = `${commentDateObject.getHours().toString().padStart(2, '0')}:${commentDateObject.getMinutes().toString().padStart(2, '0')}`;
  // console.log(formattedDate, formattedTime);

  function containsPreTag(htmlString: string) {
    const dom = new JSDOM(htmlString);
    const preTags = dom.window.document.querySelectorAll("pre");

    return preTags.length > 0;
  }

  // console.log(containsPreTag(postInfo?.body!))

  return (
    <main className="antialiased text-white">
      <div className="flex justify-between text-white">
        <article className="w-full format format-sm sm:format-base lg:format-lg format-blue format-invert bg-zinc-900 rounded leading-1.5 p-4 border border-zinc-700">
          <div className="mb-4 lg:mb-6 not-format">
            <address className="flex flex-row w-full justify-between items-center mb-6 not-italic">
              <div className="flex flex-row justify-center items-center gap-4">
                <Link href={`/user/${postInfo?.userId}`}>
                  <Image
                    src={
                      postInfo?.user?.profileImage
                        ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                          `${postInfo?.user?.profileImage}`
                        : "/1.png"
                    }
                    alt="user photo"
                    height={32}
                    width={32}
                    className="w-8 h-8 rounded-full object-cover object-center"
                  />
                </Link>
                <Link href={`/user/${postInfo?.userId}`}>
                  <span className="text-sm font-bold hover:underline">
                    {postInfo?.user?.username}
                  </span>
                </Link>
              </div>
              <span className="text-xs font-normal text-zinc-400">
                {formattedDate}, {formattedTime}
              </span>
            </address>
            <h1 className="mb-4 text-xl font-extrabold leading-tight lg:mb-6 lg:text-2xl text-white">
              {postInfo?.title}
            </h1>

            {postInfo?.image ? (
              <div className="w-full h-96 relative my-2.5">
                <Link href={`/feed/${id}`}>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                      `${postInfo.image}`
                    }
                    alt="post photo"
                    fill
                    className="object-cover object-center"
                  />
                </Link>
              </div>
            ) : null}
          </div>
          <div dangerouslySetInnerHTML={{ __html: postInfo?.body || "" }}></div>
          {/* {containsPreTag(postInfo?.body!) === true ? 
           ( 
            <CodeBlock
            />
          ) : 
          (
            <div className='text-sm'>
            {Parser(postInfo!.body)}
            </div>  
          )
          } */}

          <div className="text-gray-300 text-xs mt-4 flex flex-row items-center gap-2">
            {postInfo?.hashtags.map((item, index) => (
              <span key={index}>#{item}</span>
            ))}
          </div>
        </article>
      </div>
      {/* COMMENT SECTION */}
      <div className="my-8 p-6 bg-zinc-900 rounded leading-1.5 border border-zinc-700">
        <h2 className="text-md font-bold mb-4 border-b py-2 border-zinc-600">
          Discussion
        </h2>
        <CommentForm postId={id} />
        {commentsData?.comments?.length > 0 ? (
          <div>
            {/* @ts-ignore */}
            {commentsData.comments.map((item) => (
              <article className="py-4 border-t border-zinc-700" key={item.id}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-white">
                      <Image
                        src={
                          item?.user?.profileImage
                            ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                              `${item?.user?.profileImage}`
                            : "/1.png"
                        }
                        alt="user photo"
                        height={24}
                        width={24}
                        className="w-6 h-6 rounded-full object-cover object-center mr-2"
                      />
                      {item?.user?.username}
                    </p>
                    {/* <p className="text-xs text-zinc-400"><time>{cFormattedDate}, {cFormattedTime}</time></p> */}
                  </div>
                </div>
                <p className="text-white text-sm">{item.body}</p>
              </article>
            ))}
          </div>
        ) : (
          <span>No comments yet</span>
        )}
      </div>
    </main>
  );
};

export default PostPage;
