import { db, storage } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { useState, useEffect } from "react";
import { deleteObject, ref } from "firebase/storage";
import { useRouter } from "next/router";
// import Moment from "react-moment";
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
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";

export default function Post({ post, id }) {
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const router = useRouter();

  async function likePost() {
    // if (currentUser) {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", "uid"));
    } else {
      await setDoc(doc(db, "posts", id, "likes", "uid"), {
        username: "좋아요",
      });
    }
    // } else {
    //   // signIn();
    //   router.push("/auth/signin");
    // }
  }

  async function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?" + id)) {
      deleteDoc(doc(db, "posts", id));
      if (post.data().image) {
        deleteObject(ref(storage, `posts/${id}/image`));
      }
      router.push("/");
    }
  }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}

      <div className="flex-col mr-4">
        <Image
          className="rounded-full "
          width="50"
          height="50"
          src={post?.data()?.userImg}
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
              {post?.data()?.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post?.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">-</span>
          </div>
          {/* dot icon */}
          <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
          {post?.data()?.text}
        </p>

        {/* post image */}

        <Image
          src={post?.data()?.image}
          onClick={() => router.push(`/posts/${id}`)}
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
            <ChatBubbleOvalLeftEllipsisIcon
              onClick={() => {
                setPostId(id);
                setOpen(!open);
              }}
              className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            />
            <span className="text-sm">99</span>
          </div>
          <TrashIcon
            onClick={deletePost}
            className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
          />
          <div className="flex items-center">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
              />
            )}
            <span className={` text-red-600 text-sm select-none`}> 19</span>
          </div>
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
