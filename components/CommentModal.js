import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});
  const [input, setInput] = useState("");
  const router = useRouter();
  console.log("CommentModal", open, postId);

  return (
    <div>
      <h1>comment modal</h1> {open && <p>modal content open</p>}
    </div>
  );
}
