import React from "react";
import Image from "next/image";
import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  TrashIcon,
  HeartIcon,
  ShareIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";

export default function Post({ post, id }) {
  //   console.log(post);
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}

      <div className="flex-col mr-4">
        <Image
          className="rounded-full "
          width="50"
          height="50"
          src={post?.userImg}
          alt="user-img"
        />
      </div>

      {/* right side */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post?.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post?.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <>{post?.timestamp}</>
            </span>
          </div>
          {/* dot icon */}
          <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
          {post?.text}
        </p>

        {/* post image */}

        <Image
          src={post?.img}
          className="rounded-2xl -mr2"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="post-image"
        />

        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <div className="flex items-center select-none">
            <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            <span className="text-sm">99</span>
          </div>
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <div className="flex items-center">
            <HeartIconFilled className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100" />
            <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
            <span className={` text-red-600 text-sm select-none`}> 19</span>
          </div>
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
