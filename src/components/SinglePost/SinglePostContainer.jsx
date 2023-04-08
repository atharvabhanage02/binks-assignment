import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../Feed/PostCard/PostCard";
import styles from "./singlePost.module.css";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../redux/features/postSlice";
import { fetchComments } from "../../redux/features/commentSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import { users } from "../../redux/features/users";

function SinglePostContainer() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const allComments = useSelector((state) => state.comments.comments);

  const params = useParams();
  const commentOnCurrentPost = allComments.filter(
    (comment) => comment.postId == params.postId
  );
  const currentPost = posts.find((post) => post.id == params.postId);
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const getUser = (userId) => {
    return users.find((user) => user.id == userId);
  };

  return (
    <div className={styles.singlePostContainer}>
      {currentPost && (
        <PostCard
          key={currentPost.id}
          post={currentPost}
          comments={commentOnCurrentPost}
          showComments={true}
          user={getUser(currentPost.userId)}
        />
      )}
    </div>
  );
}
export { SinglePostContainer };
