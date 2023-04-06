import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../Feed/PostCard/PostCard";
import styles from "./singlePost.module.css";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../redux/features/postSlice";
import { fetchComments } from "../../redux/features/commentSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePostContainer() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const params = useParams();

  const currentPost = posts.find((post) => post.id == params.postId);

  const [currentPostComments, setCurrentPostComments] = useState([]);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
    (async () => {
      const comment = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
      );
      setCurrentPostComments(comment.data);
    })();
  }, []);

  return (
    <div className={styles.singlePostContainer}>
      {currentPost && (
        <PostCard
          post={currentPost}
          comments={currentPostComments}
          showComments={true}
        />
      )}
    </div>
  );
}
export { SinglePostContainer };
