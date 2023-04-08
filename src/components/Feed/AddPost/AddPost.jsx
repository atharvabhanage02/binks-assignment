import { useState } from "react";
import styles from "./addPost.module.css";
import { BsPerson } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createPost } from "../../../redux/features/postSlice";
function AddPost() {
  const [postContent, setPostContent] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles.addPostContainer}>
      <div className={styles.postInputSection}>
        <img
          src="./Assets/user_avatar.png"
          className={styles.profileIcon}
          alt="Avatar"
        />
        <input
          type="text"
          className={styles.postInput}
          placeholder="What's happening?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <div className={styles.postButtonSection}>
        <button
          className={styles.postButton}
          onClick={() => {
            dispatch(createPost(postContent));
            setPostContent("");
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
export { AddPost };
